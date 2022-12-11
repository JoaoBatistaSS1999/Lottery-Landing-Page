import React, { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";

import { shortAddress } from "../../utils";
import { GlobalContext } from "../../context/GlobalState";

import link from "../../assets/Icons/biglink.png";
import logo from "../../assets/Icons/logo.png";
import luckblock from "../../assets/images/luckblockssvg_1.svg";
import hamburger from "../../assets/utility/hamburger.png";
import close from "../../assets/utility/close.png";
import twitter from "../../assets/socialIcons/twitter.png";
import telegram from "../../assets/socialIcons/telegram.png";

const Header = () => {
	const [account, setAccount] = useState(" ");
	const { addUser } = useContext(GlobalContext);
	const [walletConnected, setWalletConnected] = useState(false);
	const [web3Modal, setWeb3Modal] = useState(null);
	const [isMobileMenu, setMobileMenu] = useState(false);

	const handleMobileMenu = () => {
		setMobileMenu((prevState) => !prevState);
	};

	useEffect(() => {
		const providerOptions = {};

		const newWeb3Modal = new Web3Modal({
			cacheProvider: true,
			network: "mumbai",
			providerOptions,
		});

		setWeb3Modal(newWeb3Modal);
	}, []);

	useEffect(() => {
		// connect automatically and without a popup if user is already connected
		if (web3Modal && web3Modal.cachedProvider) {
			connectWallet();
		}
	}, [web3Modal]);

	async function addListeners(web3ModalProvider) {
		web3ModalProvider.on("accountsChanged", (accounts) => {
			connectWallet();
		});

		// Subscribe to chainId change
		web3ModalProvider.on("chainChanged", (chainId) => {
			connectWallet();
		});
	}

	const disconnectWallet = async () => {
		await web3Modal.clearCachedProvider();

		// handleClose();
		setWalletConnected(false);
		// removeAccount();
	};
	async function connectWallet() {
		if (typeof window.ethereum !== "undefined") {
			const provider = await web3Modal.connect();
			addListeners(provider);
			const ethersProvider = new providers.Web3Provider(provider);
			const { chainId } = await ethersProvider.getNetwork();
			const userAddress = await ethersProvider.getSigner().getAddress();
			const userBalance = await ethersProvider.getBalance(userAddress);
			// console.log("userBalance", ethers.utils.formatUnits(userBalance));
			setAccount(userAddress);
			setWalletConnected(true);
			addUser({
				account: userAddress,
				userBalance: userBalance,
			});
			if (chainId !== 97) {
				checkifUserisConnectedToBsc();
			}
			// console.log("userAccount", userAccount);
		} else {
			console.log("MetaMask is installed!");
			alert(
				`Failed to load web3, accounts, or contract. please make sure that you have metamask installed on your browser and is connected to Ropsten network  .`
			);
		}
	}

	async function checkifUserisConnectedToBsc() {
		try {
			console.log("here switch2");
			console.log("here switch", "0x13881");
			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: `0x${Number(56).toString(16)}` }],
			});
			console.log("here switch");
		} catch (err) {
			// This error code indicates that the chain has not been added to MetaMask
			if (err.code === 4902) {
				await window.ethereum.request({
					method: "wallet_addEthereumChain",
					params: [
						{
							chainName: "Binance Smart Chain Mainnet",
							chainId: `0x${Number(56).toString(16)}`,
							nativeCurrency: {
								name: "Binance Chain Native Token",
								symbol: "BNB",
								decimals: 18,
							},
							rpcUrls: [
								"https://bsc-dataseed1.binance.org",
								"https://bsc-dataseed2.binance.org",
								"https://bsc-dataseed3.binance.org",
								"https://bsc-dataseed4.binance.org",
								"https://bsc-dataseed1.defibit.io",
								"https://bsc-dataseed2.defibit.io",
								"https://bsc-dataseed3.defibit.io",
								"https://bsc-dataseed4.defibit.io",
								"https://bsc-dataseed1.ninicoin.io",
								"https://bsc-dataseed2.ninicoin.io",
								"https://bsc-dataseed3.ninicoin.io",
								"https://bsc-dataseed4.ninicoin.io",
								"wss://bsc-ws-node.nariox.org",
							],
						},
					],
				});
			}
		}
	}

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
					{walletConnected ? (
						<button
							onClick={disconnectWallet}
							className="flex gap-1 font-tcbnormal  justify-center items-center border-2 border-[#2AD5FB] text-[#2AD5FB] w-[195px] h-[41px] rounded-[21px] "
						>
							<img src={link} alt="chain" className="w-5 h-5" />
							{shortAddress(account)}
						</button>
					) : (
						<button
							onClick={() => {
								connectWallet();
							}}
							className="flex gap-1 font-tcbnormal  justify-center items-center border-2 border-[#2AD5FB] text-[#2AD5FB] w-[195px] h-[41px] rounded-[21px] "
						>
							<img src={link} alt="chain" className="w-5 h-5" /> Connect Wallet
						</button>
					)}
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
						{walletConnected ? (
							<button
								onClick={disconnectWallet}
								className="flex gap-1 justify-center items-center border-2 border-[#2AD5FB] text-[#2AD5FB] w-[200px] h-[41px] rounded-[21px] "
							>
								<img src={link} alt="chain" className="w-5 h-5" />{" "}
								{shortAddress(account)}
							</button>
						) : (
							<button
								onClick={() => {
									connectWallet();
								}}
								className="flex gap-1 justify-center items-center border-2 border-[#2AD5FB] text-[#2AD5FB] w-[200px] h-[41px] rounded-[21px] "
							>
								<img src={link} alt="chain" className="w-5 h-5" /> Connect Wallet
							</button>
						)}
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
