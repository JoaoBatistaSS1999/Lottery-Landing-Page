import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./Hero";
import Logs from "./Logs";
import Partners from "./Partners";
import Main from "./Main";

import Bitcoin from "./pages/Bitcoin";
import Ethereum from "./pages/Ethereum";
import React from "react";
import Krstm from "./pages/Krstm";
import Matic from "./pages/Matic";
import MyTickets from "./pages/MyTickets";
import Social from "./Social";
import ChooseDraw from "./components/UI/Modals/ChooseDraw";
import ChooseNumber from "./components/UI/Modals/ChooseNumber";
import Success from "./components/UI/Modals/Success";

// const hello = process.env.REACT_APP_TEST_VARIABLE;

function App() {
	const [showDraw, setShowDraw] = useState(false);
	const [showNumber, setShowNumber] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	return (
		<React.Fragment>
			<Header />
			<Hero
				setShowDraw={() => {
					setShowDraw(true);
				}}
			/>

			<BrowserRouter>
				<Main />
				<Routes>
					<Route path="/" element={<Bitcoin />} />
					<Route path="/ethereum" element={<Ethereum />} />
					<Route path="/krstm" element={<Krstm />} />
					<Route path="/matic" element={<Matic />} />
					<Route path="/my-tickets" element={<MyTickets />} />
				</Routes>
			</BrowserRouter>
			{showDraw && (
				<ChooseDraw
					showDraw={showDraw}
					setShowDraw={() => {
						setShowDraw(false);
					}}
				/>
			)}
			{showNumber && <ChooseNumber />}
			{showSuccess && <Success />}
			<div className=" bg-no-repeat bg-cover bg-people-group">
				<Banner
					setShowDraw={() => {
						setShowDraw(true);
					}}
				/>

				<Logs />
			</div>

			<Partners />
			<Footer />
			<Social />
		</React.Fragment>
	);
}

export default App;
