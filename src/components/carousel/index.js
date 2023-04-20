import { Carousel } from "flowbite-react";
import React from "react";
import MyTickets from "../../pages/MyTickets";
import Ticket2 from "../../pages/ticket2";
import Tickets3 from "../../pages/Tickets3";
import Partners from "../../Partners";
import Social from "../../Social";

const CarouselPage = () => {
	return (
		<div className="h-auto">
			<Carousel
				className="bg-gradient-to-b via-blue-900 from-[#010b18] to-[#596b87] "
				slide={false}
			>
				{/* <MyTickets /> */}
				<Ticket2 />
				<Tickets3 />
			</Carousel>
		</div>
	);
};

export default CarouselPage;
