import React from "react";
import { shallow } from "enzyme";
import {Create_page} from "../../components/Create_page";
import expenses from "../fixtures/expenses";

let add_expense, history, wrapper;
beforeEach(() => {
	add_expense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(<Create_page add_expense={add_expense} history={history}/>);
});

test("should render Create_page correctly", () => {
	expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
	wrapper.find("Expense_form").prop("onSubmit")(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith("/");
	expect(add_expense).toHaveBeenLastCalledWith(expenses[1]);
});

