import React from "react";
import start from "../assets/utility/star.svg";
import copy from "../assets/utility/copy.png";
import winningNumber from "../assets/utility/winning-number.png";
import bitcoin from "../assets/utility/bitcoin.png";
import info from "../assets/utility/info.svg";
import eth from "../assets/images/eth.png";

const MyTickets = () => {
	return (
		<div className="w-full flex justify-center  bg-gradient-to-b via-blue-900 from-[#010b18] to-[#596b87] ">
			<div className="max-w-screen-lg w-full flex flex-col  items-center bg-gradient-to-r from-[#000047] to-[#000047] via-purple-900  p-10 text-white rounded-[29px]">
				<h2 className="text-4xl font-bold font-tcbbold italic mt-10 mb-7">
					CURRENT TICKET
				</h2>
				<div className="w-full grid grid-cols-4 gap-4 ">
					<ul className="sm:col-span-1  col-span-4 gap-2">
						<li className="flex font-bold border-b border-[#5153AC] font-tcbnormal italic text-xl text-[#8E90FF] flex-col justify-center items-start py-7 px-5  ">
							TOTAL TICKED BOUGHT:{" "}
							<p className="font-bold text-2xl font-tcbbold text-white">15 865</p>
						</li>
						<li className="flex font-bold border-b border-[#8E90FF] font-tcbnormal italic   text-xl text-[#8E90FF] flex-col justify-center items-start py-7 px-5  ">
							PRICE OF TICKET{" "}
							<p className="font-bold text-2xl font-tcbbold flex items-center gap-3 text-white">
								0,5 BNB <img src={info} alt="info" className="w-4 h-4" />
							</p>
						</li>
					</ul>

					<div className="w-full border sm:col-span-2  col-span-4 rounded-3xl p-4">
						<div className="flex justify-between items-center mb-9">
							<img
								src={bitcoin}
								alt="bitcoin"
								className="w-10 border-2 border-white rounded-full p-1"
							/>
							DRAWS: 1/3
						</div>

						<h3 className="w-full flex font-tcbregular italic text-2xl text-[#8E90FF]  justify-center  mb-3">
							ON JACKPOT WIN:
						</h3>
						<h3 className="w-full flex justify-center sm:text-6xl text-4xl text-[#f407e7] font-bold ">
							2.35{" "}
							<span className="ml-2 sm:text-6xl text-4xl text-[#4ae4fd] font-bold ">
								BTC
							</span>
						</h3>
						<h3 className="w-full flex justify-center mb-4">~90.000 USD</h3>

						<div className="w-full mb-2 flex font-tcbbold bg-[#39268e] text-base items-center justify-between px-3 py-2  rounded-3xl text-sm">
							<span className=" font-tcbregular italic text-2xl text-[#8E90FF]">
								DRAW 1 RESULT:
							</span>{" "}
							LOOSE
						</div>
						<div className="w-full bg-[#39268e] font-tcbbold text-base flex justify-between items-center px-3 py-2  rounded-3xl text-sm">
							<span className=" font-tcbregular italic text-2xl text-[#8E90FF]">
								DRAW 1 RESULT:
							</span>{" "}
							+0,005 BTC
						</div>

						<div className="flex flex-col">
							<span className="w-full flex font-tcbregular italic text-2xl text-[#8E90FF] justify-center mt-5 font-bold">
								NEXT SPIN IN:
							</span>
							<div className="w-full flex justify-around sm:gap-3 mt-3 pt-2">
								<div className="flex flex-col w-fit mx-0 px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center">DAYS</h2>
								</div>

								<div className="flex flex-col mx-0 w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full font-tcbbold flex justify-center">HOURS</h2>
								</div>
								<div className="flex flex-col w-fit mx-0 px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center">MINUTES</h2>
								</div>
							</div>
						</div>
					</div>

					<ul className="flex flex-col sm:col-span-1  col-span-4 gap-2">
						<li className="flex font-bold border-b border-[#8E90FF] font-tcbnormal italic  text-xl text-[#8E90FF] flex-col justify-center items-start py-7 px-5  ">
							TOTAL TICKED BOUGHT:{" "}
							<p className="font-bold text-2xl font-tcbbold text-white">15 865</p>
						</li>
						<li className="flex font-bold border-b border-[#8E90FF] font-tcbnormal italic   text-xl text-[#8E90FF] flex-col justify-center items-start py-7 px-5 ">
							PRICE OF TICKET{" "}
							<p className="font-bold text-2xl font-tcbbold flex items-center gap-3 text-white">
								0,5 BNB <img src={info} alt="info" className="w-4 h-4" />
							</p>
						</li>
					</ul>
				</div>
				<div className="grid border h-[400px] p-4 w-full mt-20 place-items-center rounded-[39px] border-white mt-4 ">
					<div className="font-tcbregular mt-8 mx-auto text-white  text-4xl">
						YOU DONT HAVE ETHEREUM TICKET LEFT, BUY <br /> SOME AND HELP CHANGE YOUR
						LUCK
					</div>
					<button className="sm:w-[400px] flex gap-1 justify-center items-center  w-[300px] rounded-[39px] h-12 text-xl font-tcbregular italic text-white bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] ">
						<img src={eth} alt="chain" className="w-6 h-6" />+ BUY TICKET
					</button>
				</div>
			</div>
		</div>
	);
};

export default MyTickets;
