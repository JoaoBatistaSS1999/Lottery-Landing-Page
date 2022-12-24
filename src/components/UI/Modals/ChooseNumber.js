import { React, Fragment, useContext, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import winningNumber from "../../../assets/utility/winning-number.png";
import { GlobalContext } from "../../../context/GlobalState";
import Web3Modal from "web3modal";
import { ethers, Signer } from "ethers";
import LuckBlocks from "../../../abi/LuckBlocks.json";
import ERC20 from "../../../abi/ERC20_ABI.json";

import { erc20Address, luckBlocksAddress } from "../../../.config";
import spinner from "../../../assets/images/spinner.svg";
import { checkIfNumberisThesame } from "../../../utils";
import Swal from "sweetalert2";

const ChooseNumber = ({ showNumber, setShowNumber, setShowSuccess }) => {
	const [loading, setLoading] = useState(false);
	const [formInput, updateFormInput] = useState({
		firstNumber: 0,
		secondNumber: 0,
	});
	const { ticketAmount, users } = useContext(GlobalContext);

	function isNumberKey(e) {
		const typed = +e.key;

		if (!isNaN(typed)) e.preventDefault(); // Allow any non-number keys (backspace etc.)

		if (+(e.target.value + typed) <= 25) {
			e.target.value += typed;
		} else {
			console.log(`Number too big! Max is ${25}`);
		}
	}
	async function buyTicket() {
		if (users.account == "") {
			console.log("please connect to metamask");
		} else {
			setLoading(true);
			const { firstNumber, secondNumber } = formInput;

			if (checkIfNumberisThesame(firstNumber, secondNumber) == true) {
				Swal.fire({
					title: "Danger",
					text: "Failed: numbers has to be between 1 and 25 and not be equal.",
					icon: "error",
					showConfirmButton: false,
					timer: 1500,
				});
			} else {
				const web3modal = new Web3Modal();
				const connection = await web3modal.connect();
				const provider = new ethers.providers.Web3Provider(connection);
				const signer = provider.getSigner();

				const ticketvalue = ethers.utils.parseUnits(ticketAmount, "ether");
				const contract = await new ethers.Contract(
					luckBlocksAddress,
					LuckBlocks.abi,
					signer
				);

				console.log("ticketProvider:::", ticketAmount);

				console.log("ticketProvider", secondNumber);

				let transaction = await contract.BuyTicket(
					users.account,
					ticketvalue,
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
			}
		}
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
													onKeyDown={(event) => {
														isNumberKey(event);
													}}
													value={formInput.firstNumber}
													onChange={(e) =>
														updateFormInput({ ...formInput, firstNumber: e.target.value })
													}
													className="block lg:w-32 bg-black border text-gray-300 text-center sm:text-[48px] text-[48px] lg:text-[96px] h-36 border-[#B2FAFF] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
												/>
											</div>
											<p className="mt-2 text-sm  text-[#8E90FF]">1 DRAW</p>
										</div>
										<div>
											<div className="mt-1">
												<input
													type="number"
													id="draw2"
													onKeyDown={(event) => {
														isNumberKey(event);
													}}
													value={formInput.secondNumber}
													onChange={(e) =>
														updateFormInput({ ...formInput, secondNumber: e.target.value })
													}
													className="block lg:w-32 bg-black border text-gray-300 text-center sm:text-[48px] text-[48px] lg:text-[96px] h-36 border-[#B2FAFF] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
												/>
											</div>
											<p className="mt-2 text-sm text-[#8E90FF]">2 DRAW</p>
										</div>
									</div>
									<button
										onClick={buyTicket}
										className="lg:w-32 rounded-[39px] flex items-center p-4 h-12 text-xl font-tcbregular justify-center italic text-white bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] "
									>
										{loading && (
											<img className="animate-spin mr-3   w-5 h-5" src={spinner} />
										)}
										ACCEPT
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ChooseNumber;
