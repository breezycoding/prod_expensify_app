import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import Expense_form from "../../components/Expense_form";
import expenses from "../fixtures/expenses";

test("should render Expense_form correctly", ()=> {
	const wrapper = shallow(<Expense_form />);
	expect(wrapper).toMatchSnapshot();
});

test("should render Expense_form correctly with expense data", ()=> {
	const wrapper = shallow(<Expense_form expense={expenses[1]}/>);
	expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", ()=>{
	const wrapper = shallow(<Expense_form />);
	wrapper.find("form").simulate("submit", {
		preventDefault: () => {}
	});
	expect(wrapper.state('error_message').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test("Shoud set description on input change", () => {
	const value = "New description";
	const wrapper = shallow(<Expense_form />);
	wrapper.find("input").at(0).simulate("change",{
		target:{ value }
	});
	expect(wrapper.state("description")).toBe(value);
});

test("Shoud set note value on textarea change", () => {
	const value = "New note value";
	const wrapper = shallow(<Expense_form />);
	wrapper.find("textarea").simulate("change",{
		target:{ value }
	});
	expect(wrapper.state("note")).toBe(value);
});

test("Shoud set valid amount on input change", () => {
	const value = "23.50";
	const wrapper = shallow(<Expense_form />);
	wrapper.find("input").at(1).simulate("change",{
		target:{ value }
	});
	expect(wrapper.state("amount")).toBe(value);
});

test("Shoud set invalid amount on input change", () => {
	const value = "12.122";
	const wrapper = shallow(<Expense_form />);
	wrapper.find("input").at(1).simulate("change",{
		target:{ value }
	});
	expect(wrapper.state("amount")).toBe("");
});

test("should call on_submit prop for value form submission", () => {
	const on_submit_spy = jest.fn();
	const wrapper= shallow(<Expense_form expense={expenses[0]} onSubmit={on_submit_spy} />);
	wrapper.find("form").simulate("submit",{
		preventDefault: () => { }
	});
	expect(wrapper.state("error_message")).toBe("");
	expect(on_submit_spy).toHaveBeenLastCalledWith({
		description:expenses[0].description,
		amount:expenses[0].amount,
		note:expenses[0].note,
		created_at:expenses[0].created_at
	});
});

/*test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<Expense_form />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('created_at')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<Expense_form />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendar_focused')).toBe(focused);
});*/