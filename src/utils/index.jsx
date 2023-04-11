import { ethers } from "ethers";

export const switchNetwork = async () => {
	try {
		await window.ethereum.request({
			method: "wallet_switchEthereumChain",
			params: [{ chainId: "0x61" }],
		});
	} catch (error) {
		if (error.code === 4902) {
			try {
				await window.ethereum.request({
					method: "wallet_addEthereumChain",
					params: [
						{
							chainId: "0x61",
							chainName: "Smart Chain - Testnet",
							nativeCurrency: {
								name: "Binance",
								symbol: "BNB", // 2-6 characters long
								decimals: 18,
							},
							blockExplorerUrls: ["https://testnet.bscscan.com"],
							rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
						},
					],
				});
			} catch (addError) {
				console.error(addError);
			}
		}
		// console.error(e)
	}
};

/**Returns the chain ID and name. Metamask has to be installed. */
export const getChainId = async () => {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const network = await provider.getNetwork();
	return network.chainId;
};

/**Returns a short version of the user address (first 6 and last 4 characters separate by ". . .") */
export const shortAddress = (address) => {
	if (address === undefined) return;

	const shortAddress =
		address.substring(0, 6) +
		"..." +
		address.substring(address.length - 4, address.length);
	return shortAddress;
};

export const timeConverter = (UNIX_timestamp) => {
	var a = new Date(UNIX_timestamp * 1000);
	var months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time =
		date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
	return time;
};
export const bigNumberToNumber = (number) => {
	return ethers.utils.formatUnits(number.toString(), "ether") * 1e18;
};

export const fourDecimalNumber = (number) => {
	return number.toFixed(5);
};

export const ethcheckIfNumberisThesame = (number1, number2, number3) => {
	if (
		number1 <= 25 &&
		number1 > 0 &&
		number2 <= 25 &&
		number2 > 0 &&
		number3 <= 25 &&
		number3 > 0 &&
		number1 != number2 &&
		number1 != number3 &&
		number2 != number3
	) {
		return false;
	} else return true;
};
export const checkIfNumberisThesame = (number1, number2) => {
	if (
		number1 <= 25 &&
		number1 > 0 &&
		number2 <= 25 &&
		number2 > 0 &&
		number1 != number2
	) {
		return false;
	} else return true;
};

export const maticCheckIfNumberisThesame = (
	number1,
	number2,
	number3,
	number4
) => {
	if (
		number1 <= 25 &&
		number1 > 0 &&
		number2 <= 25 &&
		number2 > 0 &&
		number3 <= 25 &&
		number3 > 0 &&
		number4 <= 25 &&
		number4 > 0 &&
		number1 != number2 &&
		number1 != number3 &&
		number1 != number4 &&
		number2 != number3 &&
		number2 != number4 &&
		number3 != number4
	) {
		return false;
	} else return true;
};
