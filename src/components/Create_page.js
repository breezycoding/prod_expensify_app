import React from "react";
import { connect } from "react-redux";
import Expense_form from "./Expense_form";
import { add_expense } from "../actions/expenses";

export class Create_page extends React.Component{
	onSubmit = (expense) => {
		this.props.add_expense(expense);
		this.props.history.push("/");
	};
	
	render(){
		return(
			<div>
				<h1>Add Expense</h1>
				<Expense_form 
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch) => ({
	add_expense: (expense) => dispatch(add_expense(expense))
});
export default connect(undefined, mapDispatchToProps)(Create_page);