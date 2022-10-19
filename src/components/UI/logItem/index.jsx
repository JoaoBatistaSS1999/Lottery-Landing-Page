const LogItem = () => {
	return (
		<li className=" py-4 flex items-center justify-around gap-2 border-b border-gray-600">
			<p className=" text-sm font-tcbregular italic md:font-bold md:text-lg text-[#8E90FF]">
				FEB.20TH 2022 6:40PM
			</p>
			<button className="border font-tcbregular italic border-white text-white text-sm md:font-bold md:text-lg rounded-[16px] h-8 w-24">
				DRAW
			</button>
			<div className="flex flex-col lg:flex-row lg:gap-3">
				<p className="font-bold text-[#8E90FF] font-tcbregular italic text-xs lg:text-lg">
					WINNERS:
				</p>

				<p className="flex lg:hidden text-xs text-white">JOHNWICKASS9087...</p>

				<p className="hidden font-tcbregular italic lg:flex font-bold text-white">
					JOHNWICKASS9087, BIGBUNNY2301, PHILIPMORRIS
				</p>
			</div>

			<a
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				target="_blank"
				rel="noreferrer"
				className="font-bold  cursor-pointer underline text-[#8E90FF]"
			>
				+2 more
			</a>
		</li>
	);
};

export default LogItem;
