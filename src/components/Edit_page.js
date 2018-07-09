import React from "react";
import { connect } from "react-redux";
import Expense_form from "./Expense_form";
import {edit_expense, remove_expense} from "../actions/expenses";

export class Edit_page extends React.Component{
	on_submit_edit = (expense) => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push("/");
	}
	
	on_submit_remove = () => {
		this.props.removeExpense({ id:this.props.expense.id });
		this.props.history.push("/");
	}
	
	render(){
		return(
			<div>
				<Expense_form 
					expense={this.props.expense}
					onSubmit={this.on_submit_edit}
				/>
				<button onClick={this.on_submit_remove}>
					Remove
				</button>
			</div>
		)
	}
}

const map_to_state_props = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	editExpense:(id, expense) => dispatch(edit_expense(id, expense)),
	removeExpense:(data) => dispatch(remove_expense(data))
});

export default connect(map_to_state_props, mapDispatchToProps)(Edit_page);