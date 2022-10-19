import { React, Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import winningNumber from "../../../assets/utility/winning-number.png";
const ChooseNumber = () => {
	const [open, setOpen] = useState(true);
	return (
		<Transition.Root show={open} as={Fragment}>
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
										onClick={() => setOpen(false)}
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
											CHOOSE YOUR NUMBERS:
										</Dialog.Title>
									</div>
								</div>
								<div className="grid border h-[400px] place-items-center rounded-[39px] border-white mt-20 ">
									<img
										src={winningNumber}
										alt="winning_number"
										className="w-[100px] sm:w-[150px]  absolute inset-x-0 top-24 mx-auto lg:flex  h-[100px] sm:h-[150px]  "
									/>
									<div className="flex mt-12 flex-row">
										<div className="mr-4">
											<div className="mt-1">
												<input
													type="number"
													id="draw"
													className="block w-32 bg-black border text-gray-300 text-center text-8xl h-36 border-[#B2FAFF] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
												/>
											</div>
											<p className="mt-2 text-sm  text-[#8E90FF]">1 DRAW</p>
										</div>
										<div>
											<div className="mt-1">
												<input
													type="number"
													id="draw2"
													className="block w-32 bg-black border text-gray-300 text-center text-8xl h-36 border-[#B2FAFF] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
												/>
											</div>
											<p className="mt-2 text-sm text-[#8E90FF]">2 DRAW</p>
										</div>
									</div>
									<button className="w-32 rounded-[39px] h-12 text-xl font-tcbregular italic text-white bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] ">
										ACCEPT
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ChooseNumber;
