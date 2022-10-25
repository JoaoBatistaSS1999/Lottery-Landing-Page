export default (state, action) => {
	switch (action.type) {
		case "ADD_USER":
			return {
				...state,
				users: action.payload,
			};
		case "ADD_TICKETAMOUNT":
			return {
				...state,
				ticketAmount: action.payload,
			};
		default:
			break;
	}
};
