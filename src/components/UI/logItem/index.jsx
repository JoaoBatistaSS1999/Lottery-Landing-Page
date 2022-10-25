import { bigNumberToNumber, shortAddress, timeConverter } from "../../../utils";

const LogItem = ({ event }) => {
	if (event) {
		return (
			<li className=" py-4 flex items-center justify-around gap-2 border-b border-gray-600">
				<p className=" text-sm font-tcbregular italic md:font-bold md:text-lg text-[#8E90FF]">
					{timeConverter(event.args[0].toNumber())}
				</p>
				<button className="border font-tcbregular italic border-white text-white text-sm md:font-bold md:text-lg rounded-[16px] h-8 w-24">
					DRAW
				</button>
				<div className="flex flex-col lg:flex-row lg:gap-3">
					<p className="font-bold text-[#8E90FF] font-tcbregular italic text-xs lg:text-lg">
						WINNER:{shortAddress(event.args[1])}
					</p>

					{/* <p className="flex lg:hidden text-xs text-white">JOHNWICKASS9087...</p> */}

					<p className="hidden font-tcbregular items-center italic lg:flex font-bold text-white">
						We have a new raffle Winner but no jackpot! Jackpot Numbers was:{" "}
						<span className="text-2xl text-[#8E90FF] ">
							{" "}
							{bigNumberToNumber(event.args[3])} {bigNumberToNumber(event.args[3])}
						</span>
					</p>
				</div>

				{/* <a
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					target="_blank"
					rel="noreferrer"
					className="font-bold  cursor-pointer underline text-[#8E90FF]"
				>
					+2 more
				</a> */}
			</li>
		);
	}
};

export default LogItem;
