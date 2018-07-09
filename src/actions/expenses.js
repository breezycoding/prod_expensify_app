import uuid from "uuid";
//ADD EXPENSE
export const add_expense = ({ description = "", note = "", amount = 0, created_at = 0} = {}) => ({
	type: "ADD_EXPENSE",
	expense:{
		id:uuid(),
		description,
		note,
		amount, 
		created_at
	}
});

// REMOVE EXPENSE
export const remove_expense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id
});

//EDIT EXPENSE
export const edit_expense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});