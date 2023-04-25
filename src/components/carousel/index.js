import { Carousel } from "flowbite-react";
import React from "react";
import MyTickets from "../../pages/MyTickets";
import Ticket2 from "../../pages/ticket2";
import Tickets3 from "../../pages/Tickets3";
import Partners from "../../Partners";
import Social from "../../Social";
import Slider from "react-slick";
import bitcoin from "../../assets/utility/bitcoin.png";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,

	slidesToShow: 4, // show 3 slides on desktop
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768, // show 1 slide on mobile
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

//   <Carousel
// 				className="bg-gradient-to-b via-blue-900 from-[#010b18] to-[#596b87] "
// 				slide={false}
// 			>
// 				{/* <MyTickets /> */}
// 				<Ticket2 />
// 				<Tickets3 />
// 			</Carousel>

const CarouselPage = () => {
	return (
		<div className="h-auto bg-gradient-to-b via-blue-900 from-[#010b18] to-[#596b87] ">
			<div className="w-full flex-col justify-center p-10 bg-gradient-to-b via-blue-900 from-[#010b18] to-[#596b87] ">
				<div>
					<h2 className="text-4xl text-center mt-5 text-white font-bold font-tcbbold italic mt-10 mb-7">
						CURRENT TICKET
					</h2>
				</div>
				{/* <div className="w-full grid grid-cols-4 gap-4 "> */}
				<Slider {...settings}>
					<div className="w-full border  rounded-3xl p-4">
						<div className="flex text-white justify-between items-center mb-9">
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
						<h3 className="w-full flex justify-center mb-4 text-white">
							~90.000 USD
						</h3>

						<div className="w-full mb-2 flex font-tcbbold bg-[#39268e] text-white items-center justify-between px-3 py-2  rounded-3xl text-sm">
							<span className=" font-tcbregular italic text-2xl text-[#8E90FF]">
								DRAW 1 RESULT:
							</span>{" "}
							LOOSE
						</div>
						<div className="w-full bg-[#39268e] font-tcbbold text-white flex justify-between items-center px-3 py-2  rounded-3xl text-sm">
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
										<div className="rounded-md text-white text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										DAYS
									</h2>
								</div>

								<div className="flex flex-col mx-0 w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full font-tcbbold flex justify-center text-white">
										HOURS
									</h2>
								</div>
								<div className="flex flex-col w-fit mx-0 px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										MINUTES
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full  border  rounded-3xl p-4">
						<div className="flex text-white justify-between items-center mb-9">
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
						<h3 className="w-full flex justify-center mb-4 text-white">
							~90.000 USD
						</h3>

						<div className="w-full mb-2 flex font-tcbbold bg-[#39268e] text-white items-center justify-between px-3 py-2  rounded-3xl text-sm">
							<span className=" font-tcbregular italic text-2xl text-[#8E90FF]">
								DRAW 1 RESULT:
							</span>{" "}
							LOOSE
						</div>
						<div className="w-full bg-[#39268e] font-tcbbold text-white flex justify-between items-center px-3 py-2  rounded-3xl text-sm">
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
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										DAYS
									</h2>
								</div>

								<div className="flex flex-col mx-0 w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full font-tcbbold flex justify-center text-white">
										HOURS
									</h2>
								</div>
								<div className="flex flex-col w-fit mx-0 px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										MINUTES
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full  border  rounded-3xl p-4">
						<div className="flex text-white justify-between items-center mb-9">
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
						<h3 className="w-full flex justify-center mb-4 text-white">
							~90.000 USD
						</h3>

						<div className="w-full mb-2 flex font-tcbbold bg-[#39268e] text-white items-center justify-between px-3 py-2  rounded-3xl text-sm">
							<span className=" font-tcbregular italic text-2xl text-[#8E90FF]">
								DRAW 1 RESULT:
							</span>{" "}
							LOOSE
						</div>
						<div className="w-full bg-[#39268e] font-tcbbold text-white flex justify-between items-center px-3 py-2  rounded-3xl text-sm">
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
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										DAYS
									</h2>
								</div>

								<div className="flex flex-col mx-0 w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full font-tcbbold flex justify-center text-white">
										HOURS
									</h2>
								</div>
								<div className="flex flex-col w-fit mx-0 px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										MINUTES
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full  border  rounded-3xl p-4">
						<div className="flex text-white justify-between items-center mb-9">
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
						<h3 className="w-full flex justify-center mb-4 text-white">
							~90.000 USD
						</h3>

						<div className="w-full mb-2 flex font-tcbbold bg-[#39268e] text-white items-center justify-between px-3 py-2  rounded-3xl text-sm">
							<span className=" font-tcbregular italic text-2xl text-[#8E90FF]">
								DRAW 1 RESULT:
							</span>{" "}
							LOOSE
						</div>
						<div className="w-full bg-[#39268e] font-tcbbold text-white flex justify-between items-center px-3 py-2  rounded-3xl text-sm">
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
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										DAYS
									</h2>
								</div>

								<div className="flex flex-col mx-0 w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full font-tcbbold flex justify-center text-white">
										HOURS
									</h2>
								</div>
								<div className="flex flex-col w-fit mx-0 px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										MINUTES
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full  border  rounded-3xl p-4">
						<div className="flex text-white justify-between items-center mb-9">
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
						<h3 className="w-full flex justify-center mb-4 text-white">
							~90.000 USD
						</h3>

						<div className="w-full mb-2 flex font-tcbbold bg-[#39268e] text-white items-center justify-between px-3 py-2  rounded-3xl text-sm">
							<span className=" font-tcbregular italic text-2xl text-[#8E90FF]">
								DRAW 1 RESULT:
							</span>{" "}
							LOOSE
						</div>
						<div className="w-full bg-[#39268e] font-tcbbold text-white flex justify-between items-center px-3 py-2  rounded-3xl text-sm">
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
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										DAYS
									</h2>
								</div>

								<div className="flex flex-col mx-0 w-fit px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full font-tcbbold flex justify-center text-white">
										HOURS
									</h2>
								</div>
								<div className="flex flex-col w-fit mx-0 px-3">
									<div className="flex gap-1">
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
										<div className="rounded-md text-4xl font-tcbbold  bg-[#F00FE8] bg-gradient-to-r from-[#234e9c] text-white  border px-3 py-2">
											5
										</div>
									</div>
									<h2 className="w-full flex font-tcbbold  justify-center text-white">
										MINUTES
									</h2>
								</div>
							</div>
						</div>
					</div>
				</Slider>
				{/* </div> */}
			</div>
		</div>
	);
};

export default CarouselPage;
