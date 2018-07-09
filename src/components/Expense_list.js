import React from "react";
import { connect } from "react-redux";
import Expense_list_item from "./Expense_list_item";
import select_expenses from "../selectors/expenses";
/*
	steps
	1. creating const for higher order component(HOC), in this case "Connected_expense_list"
		connect()()
			has two parameters
				1. the provide the information of what we want to connect/store information
				2. component you want to connect
				
	infos
	-map_state_to_props: will automatically rerun once the info in store changes
	-when you connect component to redux store its reactive, which means as the store changes your component will be rerendered with new values
		-all we have to do is define how we rerender things
*/
export const Expense_list = (props) => (
	<div>
		<h1>Expense List</h1>
		{
			props.expenses.length === 0 ? (
				<p>no expenses array</p>
			) : (
				props.expenses.map((expense)=>{
					return <Expense_list_item key={expense.id} {...expense}/>;
				})
			)
		}
	</div>
);

const map_state_to_props = (state) => {
	return{
		expenses:select_expenses(state.expenses, state.filters)
	};
};

export default connect(map_state_to_props)(Expense_list);
