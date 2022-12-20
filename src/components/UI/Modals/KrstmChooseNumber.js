import { React, Fragment, useContext, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import winningNumber from "../../../assets/utility/winning-number.png";
import { GlobalContext } from "../../../context/GlobalState";
import Web3Modal from "web3modal";
import { ethers, Signer } from "ethers";

import KRSTMLuckBlocks from "../../../abi/KRSTMLuckblocks.json";
import ERC20 from "../../../abi/ERC20_ABI.json";
import Swal from "sweetalert2";
import { KrstmLuckBlocksAddress } from "../../../.config";
import { erc20Address } from "../../../.config";
import spinner from "../../../assets/images/spinner.svg";

const KrstmChooseNumber = ({ showNumber, setShowNumber, setShowSuccess }) => {
	const [loading, setLoading] = useState(false);
	const [approve, setApprove] = useState(false);
	const [formInput, updateFormInput] = useState({
		firstNumber: 0,
		secondNumber: 0,
	});
	const { users } = useContext(GlobalContext);
	async function buyTicket() {
		if (users.account == "") {
			console.log("please connect to metamask");
		} else {
			setLoading(true);
			const { firstNumber, secondNumber } = formInput;
			const web3modal = new Web3Modal();
			const connection = await web3modal.connect();
			const provider = new ethers.providers.Web3Provider(connection);
			const signer = provider.getSigner();

			// const ticketvalue = ethers.utils.parseUnits(ticketAmount, "ether");
			try {
				const contract = await new ethers.Contract(
					KrstmLuckBlocksAddress,
					KRSTMLuckBlocks.abi,
					signer
				);

				// console.log("ticketProvider:::", ticketAmount);

				console.log("ticketProvider", secondNumber);

				let transaction = await contract.BuyTicket(
					users.account,
					firstNumber,
					secondNumber
				);
				console.log("ticketProvider", transaction);
				let tx = await transaction.wait();
				setLoading(false);
				contract.on("LotteryLog");
				let event = tx.events[0];
				console.log("tx ", tx);
				console.log("event emmitted", event);
				setShowNumber(false);
				setShowSuccess(true);
				document.getElementById("bodyscroll").style.overflow = "scroll";
			} catch (error) {
				console.log("metamas error", error);
			}
		}
	}

	async function checkForApproval() {
		if (users.account == "") {
			console.log("please connect to metamask");
		} else {
			setLoading(true);
			const provider = new ethers.providers.JsonRpcProvider(
				`https://data-seed-prebsc-2-s3.binance.org:8545`
			);
			const contract = new ethers.Contract(erc20Address, ERC20.abi, provider);
			let approval = await contract.allowance(
				users.account,
				KrstmLuckBlocksAddress
			);
			console.log("before   ", approval);

			approval = await ethers.utils.formatUnits(approval.toString(), "ether");
			console.log("PPRO   ", approval);
			if (approval > 1000) {
				setLoading(false);
				setApprove(true);
			} else {
				approveToSpendUSDC();
			}
		}
	}

	async function approveToSpendUSDC() {
		const web3modal = new Web3Modal();
		const connection = await web3modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		let approveContract = await new ethers.Contract(
			erc20Address,
			ERC20.abi,
			signer
		);
		const approvalAmount = ethers.utils.parseUnits("20000", "ether");
		let transaction = await approveContract.approve(
			KrstmLuckBlocksAddress,
			approvalAmount
		);
		await transaction.wait();
		setLoading(false);
		setApprove(true);
		Swal.fire({
			title: "Success",
			text: "Approval was successful, Now you begin Draw",
			icon: "success",
			showConfirmButton: false,
			timer: 1500,
		});
	}
	return (
		<Transition.Root show={showNumber} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setShowNumber}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full lg:items-end xl:items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-[39px] bg-black px-8 pt-5 pb-4 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-12">
								<div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
									<button
										type="button"
										className="rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										onClick={() => setShowNumber(false)}
									>
										<span className="sr-only">Close</span>
										<XMarkIcon className="h-6 w-6  text-gray-500" aria-hidden="true" />
									</button>
								</div>
								<div className="sm:flex sm:items-center justify-center">
									<div className="mt-3 text-center sm:mt-0  sm:text-center">
										<Dialog.Title
											as="h3"
											className="text-4xl underline font-medium mt-4 font-tcbbold leading-6 text-white"
										>
											CHOOSE YOUR NUMBERS:
										</Dialog.Title>
									</div>
								</div>
								<div className="grid border h-[400px] place-items-center rounded-[39px] border-white mt-20 ">
									<img
										src={winningNumber}
										alt="winning_number"
										className="w-[100px] sm:w-[150px]  absolute inset-x-0 top-24 mx-auto lg:flex  h-[100px] sm:h-[150px]  "
									/>
									<div className="flex mt-12 flex-row">
										<div className="mr-4">
											<div className="mt-1">
												<input
													type="number"
													id="draw"
													max={25}
													min={0}
													value={formInput.firstNumber}
													onChange={(e) =>
														updateFormInput({ ...formInput, firstNumber: e.target.value })
													}
													className="block w-32 bg-black border text-gray-300 text-center text-8xl h-36 border-[#B2FAFF] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
												/>
											</div>
											<p className="mt-2 text-sm  text-[#8E90FF]">1 DRAW</p>
										</div>
										<div className="mr-4">
											<div className="mt-1">
												<input
													type="number"
													id="draw2"
													max={25}
													min={0}
													value={formInput.secondNumber}
													onChange={(e) =>
														updateFormInput({ ...formInput, secondNumber: e.target.value })
													}
													className="block w-32 bg-black border text-gray-300 text-center text-8xl h-36 border-[#B2FAFF] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
												/>
											</div>
											<p className="mt-2 text-sm text-[#8E90FF]">2 DRAW</p>
										</div>
									</div>
									{!approve && (
										<button
											onClick={() => checkForApproval()}
											className="px-4 h-12 flex items-center mx-auto text-xl font-tcbregular italic text-white bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD]  rounded-[39px]  mt-4"
										>
											{loading && (
												<img className="animate-spin mr-3   w-5 h-5" src={spinner} />
											)}
											APPROVE USDC
										</button>
									)}
									{approve && (
										<button
											onClick={buyTicket}
											className=" rounded-[39px] flex items-center p-4 h-12 text-xl font-tcbregular justify-center italic text-white bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] "
										>
											{loading && (
												<img className="animate-spin mr-3   w-5 h-5" src={spinner} />
											)}
											BEGIN DRAW
										</button>
									)}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default KrstmChooseNumber;
