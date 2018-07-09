import React from "react";
import Expense_list from "./Expense_list";
import Expense_list_filters from "./Expense_list_filters";

const Dashboard_page = () => (
	<div>
		<Expense_list_filters />
		<Expense_list />
	</div>
);

export default Dashboard_page;