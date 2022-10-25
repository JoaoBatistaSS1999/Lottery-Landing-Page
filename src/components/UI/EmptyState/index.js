import React from "react";

const EmptyState = () => {
	return (
		<div className="flex min-h-full flex-col  pt-16 pb-12">
			<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
				{/* <div className="flex flex-shrink-0 justify-center">
            <a href="/" className="inline-flex">
                <img className="h-12 w-auto" src={Rick_and_Morty} alt="" />
            </a>
        </div> */}
				<div className="py-16">
					<div className="text-center">
						<h1 className="mt-2 text-4xl font-bold tracking-tight text-[#8E90FF] sm:text-4xl">
							OOPS!, NO DATA AVAILABLE
						</h1>
						<p className="mt-2 text-base text-gray-500">
							Sorry, we couldn’t find any data
						</p>
						{/* <div className="mt-6">
                    <a
                        href="/"
                        className="text-base font-medium text-teal-600 hover:text-teal-500"
                    >
                        Go back home
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div> */}
					</div>
				</div>
			</main>
		</div>
	);
};

export default EmptyState;
