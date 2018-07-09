import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates"; 
import 'react-dates/lib/css/_datepicker.css';
import { set_text_filter , sort_by_date, sort_by_amount, set_start_date, set_end_date } from "../actions/filters";

export class Expense_list_filters extends React.Component{
	state = {
		calendar_focused: null
	}
	onDatesChange = ({startDate, endDate}) => {
		this.props.set_start_date(startDate);
		this.props.set_end_date(endDate);
	};
	onFocusChange = (calendar_focused) => {
		this.setState(() => ({calendar_focused}) );
	};

	on_text_change = (event) => {
		this.props.set_text_filter(event.target.value);
	};
	
	on_sort_change = (event) =>{
		if(event.target.value === "date"){
			this.props.sort_by_date();
		}else if(event.target.value === "amount"){
			this.props.sort_by_amount(); 
		}
	};
	
	render(){
		return(
			<div>
				<input type="text" 
					value={this.props.filters.text} 
					onChange={this.on_text_change}
				/>
				<select
					value={this.props.filters.sort_by}
					onChange={this.on_sort_change}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.start_date}
					startDateId={"startDateId"}
					endDate={this.props.filters.end_date}
					endDateId={"endDateId"}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendar_focused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		)
	}
}
const map_state_to_props =(state)=>{
	return{
		filters: state.filters	
	};
};
const mapDispatchToProps = (dispatch) => ({
	set_text_filter: (text) => dispatch(set_text_filter(text)),
	sort_by_date: () => dispatch(sort_by_date()),
	sort_by_amount: () => dispatch(sort_by_amount()),
	set_start_date: (startDate) => dispatch(set_start_date(startDate)),
	set_end_date: (endDate) => dispatch(set_end_date(endDate))
});


export default connect(map_state_to_props, mapDispatchToProps)(Expense_list_filters);