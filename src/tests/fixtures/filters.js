import moment from "moment";

const filters = {
	text: "",
	sort_by: "date",
	start_date: undefined,
	end_date: undefined
};

const alt_filters = {
	text: "bills",
	sort_by: "amount",
	start_date: moment(0),
	end_date: moment(0)add(3, "days")
};

export { filters, alt_filters }