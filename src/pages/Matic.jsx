import React, { useEffect, useState } from "react";
import start from "../assets/utility/star.svg";
import copy from "../assets/utility/copy.png";
import winningNumber from "../assets/utility/winning-number.png";
import bitcoin from "../assets/utility/bitcoin.png";
import info from "../assets/utility/info.svg";
import { ethers } from "ethers";
import { maticLuckBlocksAddress } from "../.config";
import MaticLuckBlocks from "../abi/KRSTMLuckblocks.json";
import { calcWinningChaces, fourDecimalNumber } from "../utils";
import Banner from "../Banner";
import Logs from "../Logs";

const Matic = ({ setShowDraw }) => {
	const [winner, setWinner] = useState("");
	const [jackpotWinner, setJackpotWinner] = useState("");
	const [ticketBought, setTicketBought] = useState(0);
	const [currentPriceWei, setCurrentPriceWei] = useState(0);
	const [jackpotUsd, setJackpotUsd] = useState(0);
	const [txs, setTxs] = useState([]);

	async function getRaffleWinner() {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://data-seed-prebsc-2-s3.binance.org:8545`
		);
		const contract = new ethers.Contract(
			maticLuckBlocksAddress,
			MaticLuckBlocks.abi,
			provider
		);
		const lastWinner = await contract.ourLastWinner();
		const lastJacpotWinner = await contract.ourLastJackpotWinner();
		const totalTickets = await contract.amountOfRegisters();
		const jpWei = await contract.currentJackpotInWei();
		const jpUsd = await contract.getJackpotinUSD();
		// console.log("ticket bought,", lastJacpotWinner);
		const formatedTotalTicket =
			(await ethers.utils.formatUnits(totalTickets.toString(), "ether")) * 1e18;
		const formatedJpWei = await ethers.utils.formatUnits(
			jpWei.toString(),
			"ether"
		);
		const formatedJpUsd = await ethers.utils.formatUnits(
			jpUsd.toString(),
			"ether"
		);
		setTicketBought(formatedTotalTicket);

		setWinner(lastWinner);
		setJackpotWinner(lastJacpotWinner);
		setCurrentPriceWei(parseFloat(formatedJpWei));

		setJackpotUsd(parseFloat(formatedJpUsd));
	}

	async function loadLogs() {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://data-seed-prebsc-2-s3.binance.org:8545`
		);

		const contract = new ethers.Contract(
			maticLuckBlocksAddress,
			MaticLuckBlocks.abi,
			provider
		);
		const currentBlock = await provider.getBlockNumber();
		const startBlock = 23878753;
		let eventFilter = contract.filters.LotteryLog();
		const items = await contract.queryFilter(eventFilter);
		console.log("events", await items);
		const filteredItems = items.filter(function (element) {
			return (
				element.args[2] ===
				"We have a new raffle Winner but no jackpot! Jackpot Numbers was: "
			);
		});
		// setTxs(items);
		console.log("filteredItems", filteredItems);
		setTxs(filteredItems);
	}

	useEffect(() => {
		getRaffleWinner();
		loadLogs();
	}, []);
	return (
		<>
			<div className="w-full flex justify-center bg-gradient-to-b via-blue-900 from-[#010b18] to-[#596b87]  ">
				<div className="max-w-screen-lg w-full flex flex-col  items-center bg-gradient-to-r from-[#000047] to-[#000047] via-purple-900   p-10 text-white rounded-[29px]">
					<h2 className="text-xl font-bold italic text-center font-tcbbold mb-5">
						CURRENT SELECTED CRYPTO JACKPOT ACCUMULATED CARD
					</h2>
					<div className="flex gap-2 lg:gap-10 mb-20 border-2 text-blue-400 border-blue-400 font-tcbbold rounded-[40px] py-5 px-10 text-3xl">
						{fourDecimalNumber(currentPriceWei)} MATIC{" "}
						<span className="text-3xl">~</span> {fourDecimalNumber(jackpotUsd)} USD
					</div>
					<h2 className="text-4xl font-bold italick font-tcbnormal mb-5">
						LATEST WINNERS
					</h2>

					{/* {ball winning} */}
					<div className="flex lg:h-[192px] h-[360px]  bg-gradient-to-r from-gray-600 to-gray-600 via-purple-900  p-5 rounded-[34px]">
						<div className="flex lg:flex-row flex-col self-center">
							<div className="flex flex-col mb-5 lg:border-r lg:border-white px-10">
								<h3>Latest raffle winner</h3>

								<span className="flex items-center gap-2 text-3xl">
									<img src={start} alt="start" />
									CLARCSON201941
								</span>

								<a href="" className="mt-10">
									<button className="flex items-center gap-2 bg-[#323965] h-[30px] w-[260px] px-4 py-3 rounded-[15px] text-sm">
										{`${winner}`.slice(0, 24) + "..."}
										<img src={copy} alt="copy" className="h-[15px]" />
									</button>
								</a>
							</div>

							<div className="flex flex-col pl-5 pr-10">
								<h3>Lates raffle winner</h3>

								<span className="flex items-center gap-2 text-3xl">
									<img src={start} alt="start" />
									CLARCSON201941
								</span>

								<a href="" className="mt-10">
									<button className="flex items-center gap-2 bg-[#323965] h-[30px] w-[260px] px-4 py-3 rounded-[15px] text-sm">
										{`${jackpotWinner}`.slice(0, 24) + "..."}
										<img src={copy} alt="copy" className="h-[15px]" />
									</button>
								</a>
							</div>
						</div>

						<h3 className="rotate-[270deg] font-bold hidden lg:flex text-lg w-[100%] flex items-center justify-center p-2">
							WINNING NUMBER
						</h3>
						<img
							src={winningNumber}
							alt="winning_number"
							className="w-[286px] hidden lg:flex  h-[286px] absolute translate-y-[-23%] translate-x-[270%] "
						/>
					</div>

					<div>
						<div className="flex flex-col sm:flex-col justify-between gap-2 w-full mt-16 ">
							{/* <div className="flex jutify-center gap-3 items-center">
							<img
								src={bitcoin}
								alt="bitcoin"
								className="w-24 h-24 border-2 border-white rounded-full p-1"
							/>
							<div className=" flex flex-col gap  py-1 px-2 h-full">
								<h4 className="flex font-bold text-2xl gap-2">
									BITCOIN <span className="text-pink-500">BTC</span>
								</h4>
								<div>
									<div className="flex gap-2 text-sm">
										<p className="text-gray-400">PRICE:</p>
										<p>45,480.15 $</p>
									</div>
									<div className="flex gap-2 text-sm">
										<p className="text-gray-400">VOLUME(24H):</p>
										<p>7,918,153.71 $</p>
									</div>
								</div>
							</div>
						</div> */}

							<div className="bg-gray-700 rounded-xl  flex items-center justify-center">
								<iframe
									src="https://teams.bogged.finance/embeds/chart?address=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&chain=matic&charttype=candles&theme=bg:2C004FFF|bg2:24344EFF|primary:35B6DDFF|secondary:64057AFF|text:F3F6FBFF|text2:F3F6FBFF|candlesUp:08D26BFF|candlesDown:ff4976ff|chartLine:018CF0FF&defaultinterval=15m&showchartbutton=false"
									frameBorder="0"
									height="400px"
									width="100%"
								></iframe>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row  mt-3 gap-4">
							<ul className="flex flex-col gap-2">
								<li className="flex font-bold border-b border-[#5153AC]  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
									TOTAL TICKED BOUGHT:{" "}
									<p className="font-bold text-xl text-white">{ticketBought}</p>
								</li>
								<li className="flex font-bold border-b border-[#5153AC]  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
									PRICE OF TICKET{" "}
									<p className="font-bold text-xl flex items-center gap-3 text-white">
										2000 USDC <img src={info} alt="info" className="w-4 h-4" />
									</p>
								</li>
								<li className="flex font-bold  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
									TICKET VALID FOR{" "}
									<p className="font-bold text-xl flex items-center gap-3 text-white">
										3 DRAWS <img src={info} alt="info" className="w-4 h-4" />
									</p>
								</li>
							</ul>

							<ul className="flex flex-col gap-2">
								<li className="flex font-bold border-b border-[#5153AC]  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
									LAST WINNER:{" "}
									<p className="font-bold text-xl text-white">
										{" "}
										{`${winner}`.slice(0, 24) + "..."}
									</p>
								</li>
								<li className="flex font-bold border-b border-[#5153AC]  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
									PRICE ON EACH DRAW{" "}
									<p className="font-bold text-xl flex items-center gap-3 text-white">
										800 USDC <img src={info} alt="info" className="w-4 h-4" />
									</p>
								</li>
								<li className="flex font-bold  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
									YUOR WINNING CHANCES{" "}
									<p className="font-bold text-xl flex items-center gap-3 text-white">
										{ticketBought != 0 ? calcWinningChaces(ticketBought) : "0"}%{" "}
										<img src={info} alt="info" className="w-4 h-4" />
									</p>
								</li>
							</ul>
						</div>
						<button
							onClick={setShowDraw}
							className="mx-auto mt-8 flex font-bold sm:text-2xl text-center items-center justify-center  rounded-[39px] bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] text-xs font-tcbregular italic text-[#FFFFFF] mb-12 sm:w-[400px]  w-[200px] lg:w-[400px]  mx-auto sm:h-[70px] h-[40px]"
						>
							PLAY NOW
						</button>
					</div>
				</div>
			</div>
			<div className=" bg-no-repeat bg-cover bg-people-group">
				<Banner />

				<Logs transactions={txs} />
			</div>
		</>
	);
};

export default Matic;
