/*
	combinedReducers - allows us to create multiple functions that define how redux application changes
*/

/*
	Functionality we need for expensify app using reducers
	
	ADD EXPENSE
	REMOVE EXPENSE
	EDIT EXPENSE
	SET TEXT FILTER
	SORT BY DATE
	SORT BY AMOUNT
	SET START DATE
	SET END DATE
	
	were going to break our app into multiple reducers
	
	were going to use single reducer for each root property in redux store
		in this case we have 2
			expenses
			filters
			
	combinedReducers - let us create single store for multiple reducers
*/

import { createStore, combineReducers} from "redux";
import uuid from "uuid";


//ADD EXPENSE
const add_expense = ({ description = "", note = "", amount = 0, created_at = 0} = {}) => ({
	type: "ADD_EXPENSE",
	expense:{
		id:uuid(),
		description,
		note,
		amount, 
		created_at
	}
});

// REMOVE EXPENSE
const remove_expense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id
});

//EDIT EXPENSE
const edit_expense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});

//SET TEXT FILTER
const set_text_filter = (text = "") => ({
	type: "SET_TEXT_FILTER",
	text
});

//SORT BY DATE
const sort_by_date = () => ({
	type: "SORT_BY_DATE"
});

//SORT BY AMOUNT
const sort_by_amount = () => ({
	type: "SORT_BY_AMOUNT"
});

//SET START DATE
const set_start_date = (start_date) => ({
	type: "SET_START_DATE",
	start_date
});

//SET END DATE
const set_end_date = (end_date) => ({
	type: "SET_END_DATE",
	end_date
});

//expenses reducer
const expenses_reducer_default_state = [];
const expenses_reducer = (state = expenses_reducer_default_state, action) => {
	switch(action.type){
		case "ADD_EXPENSE" :
			return [...state, action.expense];
		case "REMOVE_EXPENSE" :
			return state.filter(({ id }) => id !== action.id);
		case "EDIT_EXPENSE" :
			return state.map((expense) => {
				if(expense.id === action.id){
					return{
						...expense, ...action.updates
					}
				}else{
					return expense;
				}
			});
		default: 
			return state;
	}
};

/*
	combinedReducers-takes an argument as object
					-the argument is key value pair
					-the key would be the root state name ie here its "expenses" and "filters"
					-the value would be reducer that will manage that is ie here its "expenses_reducer"
*/

/*filters reducer*/
const filters_reducer_default_state = {
	text:"",
	sort_by: "date",
	start_date: undefined,
	end_date: undefined
}

const filters_reducer = (state = filters_reducer_default_state, action) => {
	switch(action.type){
		case "SET_TEXT_FILTER" : 
			return {
				...state,
				text: action.text
			};
		case "SORT_BY_AMOUNT" :
			return{
				...state,
				sort_by: "amount"
			};
		case "SORT_BY_DATE" :
			return{
				...state,
				sort_by: "date"
			};
		case "SET_START_DATE" :
			return{
				...state,
				start_date: action.start_date
			};
		case "SET_END_DATE" :
			return{
				...state,
				end_date: action.end_date
			};
		default: 
			return state;
	}
}
/*Get visible expenses*/
const get_visible_expenses = (expenses, {text, sort_by, start_date, end_date}) => {
	return expenses.filter((expense)=> {
		const start_date_match = typeof start_date !== "number" || expense.created_at >= start_date;
		const end_date_match = typeof end_date !== "number" || expense.created_at <= end_date;
		const text_match = expense.description.toLowerCase().includes(text.toLowerCase());
		
		return start_date_match && end_date_match && text_match;
	}).sort((a, b) => {
		if(sort_by === "date"){
			return a.created_at < b.created_at? 1 : -1;		
		}else if(sort_by === "amount"){
			return a.amount < b.amount ? 1 : -1;	 
		}
	});
	
}

/*Store creation*/
const store = createStore(
	combineReducers({
		expenses:expenses_reducer,
		filters:filters_reducer
	})
);

store.subscribe(() => {		
	const state = store.getState();
	const visible_expenses = get_visible_expenses(state.expenses, state.filters);
	console.log(visible_expenses);
});

const expense_1 = store.dispatch(add_expense({description: "Rent", amount: 100, created_at: -2000}));
const expense_2 = store.dispatch(add_expense({description: "Coffee", amount: 300, created_at: -1000}));

/*store.dispatch(remove_expense({id:expense_1.expense.id }));

store.dispatch(edit_expense(expense_2.expense.id, {amount:500 }));

store.dispatch(set_text_filter("rent"));

store.dispatch(sort_by_amount());
store.dispatch(sort_by_date());

store.dispatch(set_start_date(126));
store.dispatch(set_start_date());
store.dispatch(set_end_date(1250));
*/

//store.dispatch(set_text_filter("ffe"));

//store.dispatch(set_text_filter("rent"));

/*expenses array*/
const demo_state = {
	expenses:[{
		id:"1009",
		description:"January Rent",
		note:"this was final payment for that address",
		amount:54500,
		created_at:0
	}],
	filters:{
		text:"rent",
		sort_by:"amount",
		start_date:undefined,
		end_date:undefined
	
	}
};

/*
	Steps for allowing babel to use spread objects
	
	1. create object ie:
		const user = {
			name: "Jen",
			age: 24
		}
	2. configure babel to accept object spread operator
		-install 
			yarn add babel-plugin-transform-object-rest-spread
		-add it to .babelrc
			"transform-object-rest-spread"
	3. try console.log({...user}); to try if console.log will take spread operator on object
	


const user = {
	name: "Jen",
	age: 24
}

console.log({
	...user,
	location: "Philippines"
});
*/