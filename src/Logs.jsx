import { useState, useEffect } from "react";
import LogItem from "./components/UI/logItem";
import { ethers } from "ethers";
import { luckBlocksAddress } from "./.config";
import LuckBlocks from "./abi/LuckBlocks.json";
import EmptyState from "./components/UI/EmptyState";

const Logs = ({ transactions }) => {
	return (
		<div className="w-full flex justify-center  pb-40 px-0">
			<div className="max-w-screen-2x  w-full flex justify-center">
				<div className="flex flex-col  h-[536px] px-2  py-5 bg-[#001535] border-2 border-white rounded-[29px] w-[1088px]">
					<h3 className="text-[45px] font-tcbbold mb-4 px-4 lg:px-20 text-white ">
						LOTTERY LOGS
					</h3>
					{transactions.length === 0 ? (
						<EmptyState />
					) : (
						<ul className="w-full flex flex-col gap-2 px-1 lg:px-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#375268] scrollbar-thumb-rounded-xl">
							{transactions
								.slice(0)
								.reverse()
								.map((event, index) => (
									<LogItem event={event} key={index} />
								))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default Logs;
