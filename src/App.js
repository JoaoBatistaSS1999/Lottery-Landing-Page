import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import EthChooseNumber from "./components/UI/Modals/EthChooseNumber";
import Success from "./components/UI/Modals/Success";
import { GlobalProvider } from "./context/GlobalState";
import MaticChooseNumber from "./components/UI/Modals/MaticChooseNumber";
import KrstmChooseNumber from "./components/UI/Modals/KrstmChooseNumber";

// const hello = process.env.REACT_APP_TEST_VARIABLE;

function App() {
	const [showDraw, setShowDraw] = useState(false);
	const [showNumber, setShowNumber] = useState(false);
	const [showEthNumber, setEthShowNumber] = useState(false);
	const [showMaticNumber, setMaticShowNumber] = useState(false);
	const [showKrstmNumber, setKrstmShowNumber] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	return (
		<GlobalProvider>
			<React.Fragment>
				<Header />
				<Hero
					setShowDraw={() => {
						setShowDraw(true);
					}}
				/>

				<Router>
					<Main />
					<Routes>
						<Route
							path="/"
							element={
								<Bitcoin
									setShowDraw={() => {
										setShowDraw(true);
									}}
								/>
							}
						/>
						<Route
							path="/ethereum"
							element={
								<Ethereum
									setShowDraw={() => {
										setEthShowNumber(true);
									}}
								/>
							}
						/>
						<Route
							path="/krstm"
							element={
								<Krstm
									setShowDraw={() => {
										setKrstmShowNumber(true);
									}}
								/>
							}
						/>
						<Route
							path="/matic"
							element={
								<Matic
									setShowDraw={() => {
										setMaticShowNumber(true);
									}}
								/>
							}
						/>
						<Route path="/my-tickets" element={<MyTickets />} />
					</Routes>
					{showDraw && (
						<ChooseDraw
							showDraw={showDraw}
							setShowDraw={setShowDraw}
							setShowNumber={setShowNumber}
						/>
					)}
					<EthChooseNumber
						showNumber={showEthNumber}
						setShowNumber={setEthShowNumber}
						setShowSuccess={setShowSuccess}
					/>
					<MaticChooseNumber
						showNumber={showMaticNumber}
						setShowNumber={setMaticShowNumber}
						setShowSuccess={setShowSuccess}
					/>
					<KrstmChooseNumber
						showNumber={showKrstmNumber}
						setShowNumber={setKrstmShowNumber}
						setShowSuccess={setShowSuccess}
					/>
					{showNumber && (
						<ChooseNumber
							showNumber={showNumber}
							setShowNumber={setShowNumber}
							setShowSuccess={setShowSuccess}
						/>
					)}
					{showSuccess && (
						<Success showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
					)}
				</Router>

				<div className=" bg-no-repeat bg-cover bg-people-group">
					<Banner />

					<Logs />
				</div>

				<Partners />
				<Footer />
				<Social />
			</React.Fragment>
		</GlobalProvider>
	);
}

export default App;
