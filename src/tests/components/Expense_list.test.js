import React from "react";
import { shallow } from "enzyme";
import { Expense_list } from "../../components/Expense_list";
import expenses from "../fixtures/expenses";

test("should render Expense_list with expenses", ()=> {
	const wrapper = shallow(<Expense_list expenses={expenses}/>);
	expect(wrapper).toMatchSnapshot();
});

test("should render Expense_list with empty array", () => {
	const wrapper = shallow(<Expense_list expenses={[]}/>);
	expect(wrapper).toMatchSnapshot();
});


