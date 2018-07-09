import {add_expense, edit_expense, remove_expense} from "../../actions/expenses";
/*
	toEqual() = Use .toEqual when you want to check that two objects have the same value. This matcher recursively checks the equality of all fields, rather than checking for object identity—this is also known as "deep equal".
*/
//remove_expense
test("should setup remove expense action object", () => {
	const action = remove_expense({id: "123"});
	expect(action).toEqual({
		type:"REMOVE_EXPENSE",
		id: "123"
	});
});
//edit_expense
test("should setup edit expense action object", () => {
	const action = edit_expense("123",{description:"re",amount:"100", created_at:"1525406400000", note:"re"});
	expect(action).toEqual({
		type:"EDIT_EXPENSE",
		id:"123",
		updates:{
			description:"re",
			amount:"100",
			created_at:"1525406400000", 
			note:"re"
		}
	});
});
/*
	FYI. check on nested object. if theres incorrect nested object assertion will fail
*/
//add expense
test("should setup add expense action object with provided values", () => {
	const expense_data = {
		description: "rent",
		amount: 109,
		created_at: 1000,
		note: "This was last months rent"
	}
	
	const action = add_expense(expense_data);
	expect(action).toEqual({
		type:"ADD_EXPENSE",
		expense: {
			...expense_data,
			id: expect.any(String)
		}
	});
});
/*expect.any() : matches the type regardless of value*/
test("should set up add expense action object with default values ", () =>{
	const action = add_expense();
	expect(action).toEqual({
		type:"ADD_EXPENSE",
		expense: {
			id: expect.any(String),
			description: "",
			amount: 0,
			created_at: 0,
			note: ""
		}
	});
});