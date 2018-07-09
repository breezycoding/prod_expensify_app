import React from "react";
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";

export default class Expense_form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : "",
			note: props.expense ? props.expense.note : "",
			amount: props.expense ? (props.expense.amount / 100).toString() : "",
			created_at: props.expense ? moment(props.expense.created_at) : moment(),
			calendar_focused: false,
			error_message: ""
		}
	}
	
	on_description_change = (event) => {
		const description = event.target.value;
		this.setState(()=> ({description}));
	}
	
	on_note_change = (event) => {
		const note = event.target.value;
		this.setState(()=> ({note}));
	}
	
	on_amount_change = (event) => {
		const amount = event.target.value;
		if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
			this.setState(() => ({amount}));
		}
	}
	
	on_date_change = (created_at) => {
		if(created_at){
			this.setState(() => ({created_at}));
		}
	}
	
	on_focus_change = ({focused}) => {
		this.setState(() => ({calendar_focused:focused}));
	}
	
	on_submit = (event) => {
		event.preventDefault();
		if(!this.state.description || !this.state.amount){
			this.setState(()=>({error_message:"Please provide description and amount"}));
		}else{
			this.setState(()=>({error_message:""}));
			this.props.onSubmit({
				description:this.state.description,
				amount:parseFloat(this.state.amount,1) * 100,
				created_at:this.state.created_at.valueOf(),
				note:this.state.note
			});
		}
	}
	render(){
		return(
			<div>
				{this.state.error_message && <p>{this.state.error_message}</p>}
				<form onSubmit={this.on_submit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.on_description_change}
					/>
					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.on_amount_change}
					/>
					<SingleDatePicker 
						date={this.state.created_at}
						onDateChange={this.on_date_change}
						focused={this.state.calendar_focused}
						onFocusChange={this.on_focus_change}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						placeholder="Add a not for youre expense(optional)"
						value={this.state.note}
						onChange={this.on_note_change}
					>
					</textarea>
					<button>Add Expense</button>
				</form>
			</div>
		);
	};
}