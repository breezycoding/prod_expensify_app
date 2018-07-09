import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { Edit_page } from "../../components/Edit_page";

let edit_expense, remove_expense, history, wrapper;

beforeEach(() =>{
	edit_expense = jest.fn();
	remove_expense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
				<Edit_page
					editExpense={edit_expense}
					removeExpense={remove_expense}
					history={history}
					expense={expenses[2]}
				/>
			  );
});

test("should render Edit_page", () => {
	expect(wrapper).toMatchSnapshot();
});

test("should handle edit_expense", () => {
	wrapper.find("Expense_form").prop("onSubmit")(expenses[2]);
	expect(history.push).toHaveBeenLastCalledWith("/");
	expect(edit_expense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test("should handle remove_expense", () => {
	
	wrapper.find("button").simulate("click");
	expect(history.push).toHaveBeenLastCalledWith("/");
	expect(remove_expense).toHaveBeenLastCalledWith({id:expenses[2].id});
});