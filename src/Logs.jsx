import LogItem from "./components/UI/logItem";

const Logs = () => {
	const people = [
		{
			date: "Lindsay Walton",
			winner: "JOHNWICKASS9087, BIGBUNNY2301, PHILIPMORRIS",
		},
		// More people...
	];
	return (
		<div className="w-full flex justify-center  pb-40 px-0">
			<div className="max-w-screen-2x  w-full flex justify-center">
				<div className="flex flex-col  h-[536px] px-2  py-5 bg-[#001535] border-2 border-white rounded-[29px] w-[1088px]">
					<h3 className="text-[45px] font-tcbbold mb-4 px-4 lg:px-20 text-white ">
						LOTTERY LOGS
					</h3>
					<ul className="w-full flex flex-col gap-2 px-1 lg:px-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#375268] scrollbar-thumb-rounded-xl">
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
						<LogItem />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Logs;
