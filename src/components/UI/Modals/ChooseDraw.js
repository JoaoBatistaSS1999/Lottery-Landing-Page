import { React, Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import winningNumber from "../../../assets/utility/winning-number.png";

const ChooseDraw = ({ showDraw, setShowDraw }) => {
	const [open, setOpen] = useState(true);
	return (
		<Transition.Root show={showDraw} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-[39px] bg-black px-8 pt-5 pb-4 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-12">
								<div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
									<button
										type="button"
										className="rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										onClick={setShowDraw}
									>
										<span className="sr-only">Close</span>
										<XMarkIcon className="h-6 w-6  text-gray-500" aria-hidden="true" />
									</button>
								</div>
								<div className="sm:flex sm:items-center justify-center">
									<div className="mt-3 text-center sm:mt-0  sm:text-center">
										<Dialog.Title
											as="h3"
											className="text-4xl underline font-medium mt-4 font-tcbbold leading-6 text-white"
										>
											CHOOSE DRAWS AMOUNT
										</Dialog.Title>
									</div>
								</div>
								<div className="grid grid-cols-3 mt-14 gap-4">
									<div className="rounded-[39px] border mt-8 h-[400px] p-2 sm:p-4 flex flex-col border-white">
										<img
											src={winningNumber}
											alt="winning_number"
											className="w-[70px] sm:w-[150px]  absolute inset-x-0 sm:top-24 top-[7rem] mr-auto sm:left-16 left-[2.5rem] lg:flex  h-[70px] sm:h-[150px]  "
										/>
										<div className="mt-16 font-bold text-2xl sm:text-2xl font-tcbbold text-white italic">
											{" "}
											1 DRAW
										</div>
										<div className="mt-6 font-bold text-2xl sm:text-2xl font-tcbbold text-white italic">
											{" "}
											0.2%
										</div>
										<div className="text-base font-tcbregular italic text-[#8E90FF]">
											WINNING CHANCES
										</div>

										<div className="mt-24 text-xl font-tcbregular  text-[#8E90FF]">
											{" "}
											6.00$
										</div>
										<button className="w-full rounded-[39px] h-12 text-xl font-tcbregular italic text-white bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] ">
											+ BUY
										</button>
									</div>
									<div className="rounded-[39px] border mt-8 h-[400px] p-2 sm:p-4 flex flex-col border-white">
										<img
											src={winningNumber}
											alt="winning_number"
											className="w-[70px] sm:w-[150px]  absolute inset-x-0 sm:top-24 top-[7rem] mx-auto lg:flex  h-[70px] sm:h-[150px]  "
										/>
										<div className="mt-16 font-bold text-2xl sm:text-2xl font-tcbbold text-white italic">
											{" "}
											2 DRAWS
										</div>
										<div className="mt-6 font-bold text-2xl sm:text-2xl font-tcbbold text-white italic">
											{" "}
											0.8%
										</div>
										<div className="text-base font-tcbregular italic text-[#8E90FF]">
											WINNING CHANCES
										</div>

										<div className="mt-24 text-xl font-tcbregular  text-[#8E90FF]">
											{" "}
											12.00$
										</div>
										<button className="w-full rounded-[39px] h-12 text-xl font-tcbregular italic text-white bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] ">
											+ BUY
										</button>
									</div>
									<div className="rounded-[39px] border mt-8 h-[400px] p-2 sm:p-4 flex flex-col border-white">
										<img
											src={winningNumber}
											alt="winning_number"
											className="w-[70px] sm:w-[150px]  absolute inset-x-0 sm:top-24 top-[7rem] ml-auto sm:right-16 right-[2.5rem] lg:flex  h-[70px] sm:h-[150px]  "
										/>
										<div className="mt-16 font-bold text-2xl sm:text-2xl font-tcbbold text-white italic">
											{" "}
											3 DRAWS
										</div>
										<div className="mt-6 font-bold text-2xl sm:text-2xl font-tcbbold text-white italic">
											{" "}
											1.3%
										</div>
										<div className="text-base font-tcbregular italic text-[#8E90FF]">
											WINNING CHANCES
										</div>

										<div className="mt-24 text-xl font-tcbregular  text-[#8E90FF]">
											{" "}
											18.00$
										</div>
										<button className="w-full rounded-[39px] h-12 text-xl font-tcbregular italic text-white bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] ">
											+ BUY
										</button>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ChooseDraw;
