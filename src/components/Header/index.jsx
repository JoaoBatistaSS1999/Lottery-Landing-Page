import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { shortAddress } from "../../utils";
import { AppContext } from "../../context/appContext";

import link from "../../assets/Icons/biglink.png";
import logo from "../../assets/Icons/logo.png";
import hamburger from "../../assets/utility/hamburger.png";
import close from "../../assets/utility/close.png";
import twitter from "../../assets/socialIcons/twitter.png";
import telegram from "../../assets/socialIcons/telegram.png";

const Header = () => {
	const [shortUserAddress, setShortUserAddress] = useState();
	const { userAddress, setUserAddress, setSigner } = useContext(AppContext); // no auto-completion?
	const [isMobileMenu, setMobileMenu] = useState(false);

	const handleMobileMenu = () => {
		setMobileMenu((prevState) => !prevState);
	};

	useEffect(() => {
		if (window.ethereum === undefined) return;
		const provider = new ethers.providers.Web3Provider(window.ethereum);

		/**Get account on page load */
		const getAccounts = async () => {
			try {
				const accounts = await provider.listAccounts();
				if (accounts[0] === undefined) return;
				setUserAddress(accounts[0]);
				const signer = provider.getSigner();
				setSigner(signer);

				console.log("header getaccounts signer =>", signer);
				setShortUserAddress(shortAddress(accounts[0]));
			} catch (error) {
				console.log("get accounts failed");
			}
		};
		getAccounts();

		/**Get the new account when the user changes */
		window.ethereum.on("accountsChanged", handleAccountsChanged);
		function handleAccountsChanged(accounts) {
			if (accounts.length === 0) {
				console.log("This account is not connected");
			} else if (accounts[0] !== userAddress) {
				setUserAddress(accounts[0]);
				console.log("accounts changed", accounts[0]);
				setShortUserAddress(shortAddress(accounts[0]));

				const signer = provider.getSigner();
				console.log("header getaccounts signer =>", signer);
			}
		}
	}, []);

	const connectWallet = async () => {
		if (!window.ethereum) return console.log("install metamask!");

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		try {
			const accounts = await provider.send("eth_requestAccounts", []);
			const signer = provider.getSigner();
			console.log("header signer", signer);
			setUserAddress(accounts[0]);
		} catch (error) {
			window.alert("wallet connection denied");
		}
	};

	return (
		<header className="w-full flex bg-[#000000] text-white font-bold justify-center sticky top-0">
			<div className="max-w-screen-2xl w-full flex justify-between items-center p-3">
				<h1>
					<img className="w-56 md:w-[300px]" src={logo} alt="logo" />
				</h1>
				{/* {normal nav} */}
				<div className="hidden lg:flex sm:gap-2">
					<ul className="flex">
						<li className="flex font-tcbnormal  justify-center items-center w-28 border-gray-800 border-r">
							Home
						</li>
						<li className="flex font-tcbnormal  justify-center items-center w-28 border-gray-800 border-r">
							Dex
						</li>
						<li className="flex justify-center font-tcbnormal  items-center w-28  border-gray-800 border-r">
							Buy Crypto
						</li>
						<li className="flex justify-center font-tcbnormal  items-center w-28 ">
							Docs
						</li>
					</ul>

					<button className="flex gap-1 font-tcbnormal  justify-center items-center border-2 border-[#2AD5FB] text-[#2AD5FB] w-[195px] h-[41px] rounded-[21px] ">
						<img src={link} alt="chain" className="w-5 h-5" /> Connect Wallet
					</button>
				</div>

				{/* {mobile nav} */}
				<button onClick={handleMobileMenu} className="flex lg:hidden">
					<img src={hamburger} alt="menu" className=" w-6 md:w-9" />
				</button>

				<div
					className={
						isMobileMenu
							? "fixed right-0 top-0 w-full h-screen bg-[#000000e8] p-5 ease-in duration-500"
							: "fixed right-[-130%] top-0 p-5 ease-in duration-500"
					}
				>
					<div className="w-full flex justify-between items-center gap-3">
						<h2>
							<img className="w-[260px] " src={logo} alt="logo" />
						</h2>
						<button onClick={handleMobileMenu} className="flex lg:hidden">
							<img src={close} alt="menu" className="w-5" />
						</button>
					</div>
					<div className="w-full mt-16 flex justify-center">
						<ul className="flex flex-col gap-7 mb-3 text-2xl w-full justify-center p-2 items-center">
							<a href="#footer" onClick={handleMobileMenu}>
								<li>PLAY NOW!</li>
							</a>
							<a href="#footer" onClick={handleMobileMenu}>
								<li>LATEST WINNERS</li>
							</a>
							<a href="#footer" onClick={handleMobileMenu}>
								<li>CURRENT TICKET</li>
							</a>
							<a href="#footer" onClick={handleMobileMenu}>
								<li>LOTTERY LOGOS</li>
							</a>
							<a href="#footer" onClick={handleMobileMenu}>
								<li>BUY CRYPTO</li>
							</a>
							<a href="#footer" onClick={handleMobileMenu}>
								<li>DEX</li>
							</a>
						</ul>
					</div>

					<div className="w-full flex justify-center px-3 py-5">
						<button className="flex gap-1 justify-center items-center border-2 border-[#2AD5FB] text-[#2AD5FB] w-[200px] h-[41px] rounded-[21px] ">
							<img src={link} alt="chain" className="w-5 h-5" /> Connect Wallet
						</button>
					</div>
					<div className="flex justify-center gap-8 p-3">
						<img src={telegram} alt="telegram" className="h-10" />
						<img src={twitter} alt="twitter" className="h-10" />
					</div>
				</div>
			</div>
		</header>
		// <div className="flex justify-end h-14 w-full p-3 text-black bg-gray-400">
		//   <button
		//     onClick={connectWallet}
		//     className="p-2 flex justify-center items-center bg-blue-400"
		//   >
		//     {userAddress !== null ? shortUserAddress : "Connect Wallet"}
		//   </button>
		// </div>
	);
};
export default Header;
