//SET TEXT FILTER
export const set_text_filter = (text = "") => ({
	type: "SET_TEXT_FILTER",
	text
});

//SORT BY DATE
export const sort_by_date = () => ({
	type: "SORT_BY_DATE"
});

//SORT BY AMOUNT
export const sort_by_amount = () => ({
	type: "SORT_BY_AMOUNT"
});

//SET START DATE
export const set_start_date = (start_date) => ({
	type: "SET_START_DATE",
	start_date
});

//SET END DATE
export const set_end_date = (end_date) => ({
	type: "SET_END_DATE",
	end_date
});