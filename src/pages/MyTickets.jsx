import React from "react";
import start from "../assets/utility/star.svg";
import copy from "../assets/utility/copy.png";
import winningNumber from "../assets/utility/winning-number.png";
import bitcoin from "../assets/utility/bitcoin.png";
import info from "../assets/utility/info.svg";

const MyTickets = () => {
	return (
		<div className="w-full flex justify-center  bg-gradient-to-b via-blue-900 from-[#5576b6] to-[#596b87] ">
			<div className="max-w-screen-lg w-full flex flex-col  items-center bg-gradient-to-r from-black to-black via-purple-900  p-10 text-white rounded-[29px]">
				<h2 className="text-4xl font-bold font-tcbbold italic mt-10 mb-7">
					CURRENT TICKET
				</h2>
				<div className="w-full flex flex-col sm:flex-row gap-3">
					<ul className="flex flex-col gap-2">
						<li className="flex font-bold border-b border-[#5153AC] font-tcbnormal italic text-xl text-[#8E90FF] flex-col justify-center items-start py-7 px-5  w-72">
							TOTAL TICKED BOUGHT:{" "}
							<p className="font-bold text-2xl font-tcbbold text-white">15 865</p>
						</li>
						<li className="flex font-bold border-b border-[#8E90FF] font-tcbnormal italic   text-xl text-[#8E90FF] flex-col justify-center items-start py-7 px-5  w-72">
							PRICE OF TICKET{" "}
							<p className="font-bold text-2xl font-tcbbold flex items-center gap-3 text-white">
								0,5 BNB <img src={info} alt="info" className="w-4 h-4" />
							</p>
						</li>
					</ul>

					<div className="w-full border rounded-3xl p-4">
						<div className="flex justify-between items-center mb-9">
							<img
								src={bitcoin}
								alt="bitcoin"
								className="w-10 border-2 border-white rounded-full p-1"
							/>
							DRAWS: 1/3
						</div>

						<h3 className="w-full flex justify-center text-sm mb-3">
							ON JACKPOT WIN:
						</h3>
						<h3 className="w-full flex justify-center text-4xl font-bold">
							2.35 BTC
						</h3>
						<h3 className="w-full flex justify-center mb-4">~90.000 USD</h3>

						<div className="w-full mb-2 flex justify-between px-3 py-2 border rounded-3xl text-sm">
							<span>DRAW 1 RESULT:</span> LOOSE
						</div>
						<div className="w-full flex justify-between px-3 py-2 border rounded-3xl text-sm">
							<span>DRAW 1 RESULT:</span> +0,005 BTC
						</div>

						<div className="flex flex-col">
							<span className="w-full flex justify-center mt-5 font-bold">
								NEXT SPIN IN:
							</span>
							<div className="w-full flex gap-3 mt-3 pt-2">
								<div className="flex flex-col w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md border px-3 py-2">5</div>
										<div className="rounded-md border px-3 py-2">5</div>
									</div>
									<h2 className="w-full flex justify-center">DAYS</h2>
								</div>

								<div className="flex flex-col w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md border px-3 py-2">5</div>
										<div className="rounded-md border px-3 py-2">5</div>
									</div>
									<h2 className="w-full flex justify-center">HOURS</h2>
								</div>
								<div className="flex flex-col w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md border px-3 py-2">5</div>
										<div className="rounded-md border px-3 py-2">5</div>
									</div>
									<h2 className="w-full flex justify-center">MINUTES</h2>
								</div>
							</div>
						</div>
					</div>

					<ul className="flex flex-col gap-2">
						<li className="flex font-bold border-b border-[#8E90FF] font-tcbnormal italic  text-xl text-[#8E90FF] flex-col justify-center items-start py-7 px-5  w-72">
							TOTAL TICKED BOUGHT:{" "}
							<p className="font-bold text-2xl font-tcbbold text-white">15 865</p>
						</li>
						<li className="flex font-bold border-b border-[#8E90FF] font-tcbnormal italic   text-xl text-[#8E90FF] flex-col justify-center items-start py-7 px-5 w-72">
							PRICE OF TICKET{" "}
							<p className="font-bold text-2xl font-tcbbold flex items-center gap-3 text-white">
								0,5 BNB <img src={info} alt="info" className="w-4 h-4" />
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MyTickets;
