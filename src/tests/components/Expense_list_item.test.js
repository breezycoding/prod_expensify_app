import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import Expense_list_item from "../../components/Expense_list_item";

test("Should render expense list item", () => {
	const wrapper = shallow(<Expense_list_item {...expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});
	