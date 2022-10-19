import React from "react";

const Hero = ({ setShowDraw }) => {
	return (
		<div className="w-full flex justify-center bg-no-repeat bg-cover bg-[url('./assets/images/lotto-bg.png')]">
			<div className="max-w-screen-2xl px-3 sm:px-10 lg:min-h-screen  w-full flex text-white flex-col justify-center gap-4">
				<title className="w-full flex flex-col items-start gap-2 md:gap-3 lg:mt-80 mt-12 md:mt-0">
					<div className="w-full flex items-center justify-center md:justify-start">
						<h2 className="text-xl md:text-[80px] px-5 py-3 font-tcbbold via-transparent md:py-9 bg-gradient-to-r from-blue-900 to-pink-900   font-bold">
							CHANGE YOUR LIFE
						</h2>
					</div>
					<div className="w-full flex items-center justify-center md:justify-start">
						<h2 className="text-xl md:text-[80px] font-tcbbold px-5 py-3 via-transparent md:py-9 bg-gradient-to-r from-blue-900 to-pink-900  font-bold">
							WITH FEW SIMPLE SPINS!
						</h2>
					</div>

					{/* <div className="w-full flex items-center justify-center md:justify-start">
						<h2 className="text-xl md:text-[80px] px-5 py-3 via-transparent md:py-9 bg-gradient-to-r from-blue-900 to-pink-900  font-bold">
						
						</h2>
					</div> */}
					<div className="max-w-screen-md flex justify-center items-center">
						<p className="w-full mt-10 mb-7 text-center font-tcbnormal sm:text-start">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit
							perferendis saepe enim, nemo perspiciatis voluptatum. Cumque, officia.
							Velit perferendis dolores accusamus unde eveniet magnam dolorem nulla.
							Totam, voluptas aliquam?
						</p>
					</div>
				</title>
				<div className="w-full flex justify-center sm:justify-start mb-8">
					<button
						onClick={setShowDraw}
						className="text-xs font-tcbregular italic text-[#FFFFFF] sm:w-[400px] w-[400px] sm:h-[70px] h-[40px] font-bold sm:text-2xl  rounded-[39px] bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] "
					>
						PLAY NOW!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
