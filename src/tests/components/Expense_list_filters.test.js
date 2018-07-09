import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { Expense_list_filters } from "../../components/Expense_list_filters";
import { filters, alt_filters } from "../fixtures/filters";

let set_text_filter, sort_by_date, sort_by_amount, set_start_date, set_end_date, wrapper;

beforeEach(() => {
	set_text_filter = jest.fn();
	sort_by_date = jest.fn();
	sort_by_amount = jest.fn();
	set_start_date = jest.fn();
	set_end_date = jest.fn();
	wrapper = shallow(
		<Expense_list_filters 
			filters={filters}
			set_text_filter={set_text_filter}
			sort_by_date={sort_by_date}
			sort_by_amount={sort_by_amount}
			set_start_date={set_start_date}
			set_end_date={set_end_date}
		/>
	);
});

test("should render Expense_list_filters correctly" , () => {
	expect(wrapper).toMatchSnapshot();
});

test("should render Expense_list_filters with alt data correctly" , () => {
	wrapper.setProps({
		filters:alt_filters
	});
	expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
	const value = "Rent";
	wrapper.find("input").simulate("change",{
		target: { value }
	});
	expect(set_text_filter).toHaveBeenLastCalledWith(value);
});

test("Should sort by date", () => {
	const value = "date";
	wrapper.setProps({
		filters:alt_filters
	});
	wrapper.find("select").simulate("change",{
		target: { value }
	});
	expect(sort_by_date).toHaveBeenCalled();
});

test("shoudl sort by amount", () => {
	const value = "amount";
	wrapper.find("select").simulate("change",{
		target: { value }
	});
	expect(sort_by_amount).toHaveBeenCalled();
});

test("should handle date changes", () => {
	const start_date = moment(0).add(4, "years");
	const end_date = moment(0).add(8, "years");
	wrapper.find("DateRangePicker").prop("onDatesChange")({ start_date, end_date});
	expect(set_start_date).toHaveBeenLastCalledWith(start_date);
	expect(set_end_date).toHaveBeenLastCalleWith(end_date);
});

test("should handle data focus changes", () => {
	const calendar_focused = "end_date";
	wrapper.find("DateRangePicker").prop("onFocusChange")(called calendar focused);
	expect(wrapper.state(calendar_focused)).toBe(calendar_focused);
});