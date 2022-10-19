const Banner = ({ setShowDraw }) => {
	return (
		<div className="w-full flex flex-col justify-center bg-transparent h-96 py-5  ">
			<button
				onClick={setShowDraw}
				className="text-xs font-tcbregular italic text-[#FFFFFF] mb-12 sm:w-[400px] w-[400px] mx-auto sm:h-[70px] h-[40px] font-bold sm:text-2xl  rounded-[39px] bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] "
			>
				PLAY NOW
			</button>
			<div className="max-w-screen-2xl w-full text-white pt-0 flex flex-col items-center gap-5 text-3xl sm:text-[43px] lg:flex-row lg:text-[50px] lg:justify-center font-bold">
				<p className="font-tcbbold via-transparent bg-gradient-to-r from-blue-900 to-pink-900   lg:mr-2 p-2 ">
					WINNING
				</p>{" "}
				HAS NEVER BEEN{" "}
				<p className="font-tcbbold via-transparent bg-gradient-to-r from-blue-900 to-pink-900  lg:ml-2 p-2">
					EASIER.
				</p>
			</div>
		</div>
	);
};

export default Banner;
