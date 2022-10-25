import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	users: {
		account: "",
		userBalance: "",
	},
	ticketAmount: "",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function addUser(user) {
		dispatch({
			type: "ADD_USER",
			payload: user,
		});
	}
	function addTicketAmount(amount) {
		dispatch({
			type: "ADD_TICKETAMOUNT",
			payload: amount,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				users: state.users,
				addUser,
				addTicketAmount,
				ticketAmount: state.ticketAmount,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
