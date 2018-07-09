import expenses_reducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

/*fixtures is our data*/

test("should set default state", () => {
	const state = expenses_reducer(undefined, {type:"@@INIT"});
	expect(state).toEqual([]);
});

test("should remove expense by id", ()=>{
	const action = {
		type:"REMOVE_EXPENSE",
		id: expenses[1].id
	}
	const state = expenses_reducer(expenses, action);
	expect(state).toEqual([expenses[0],expenses[2]]);
});

test("should not remove expenses if id not found", ()=>{
	const action = {
		type:"REMOVE_EXPENSE",
		id: "-a"
	}
	const state = expenses_reducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("should add expense", ()=>{
	const expense = {
		id:"109",
		description:"laptop",
		note:"",
		created_at:20000,
		amount:19600
		
	}
	const state = expenses_reducer(expenses, {type:"ADD_EXPENSE",expense});
	expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", ()=> {
	 const amount = 123200;
	 const action = {
	 	type: "EDIT_EXPENSE",
	 	id:expenses[1].id,
	 	updates: {
	 		amount
	 	}
	 };
	 const state = expenses_reducer(expenses, action);
	expect(state[1].amount).toBe(amount);
});

test("should not edit an expense", ()=> {
	 const amount = 123200;
	 const action = {
	 	type: "EDIT_EXPENSE",
	 	id:"-1",
	 	updates: {
	 		amount
	 	}
	 };
	 const state = expenses_reducer(expenses, action);
	expect(state).toEqual(expenses);
});