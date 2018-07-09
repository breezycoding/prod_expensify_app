import moment from "moment";
import filters_reducer from "../../reducers/filters";

/*@@INIT is the type that can be seen in redux console*/
test("should setup default filter values", ()=> {
	const state = filters_reducer(undefined, {type:"@@INIT"});
	
	expect(state).toEqual({
		text:"",
		sort_by:"date",
		start_date:moment().startOf("month"),
		end_date:moment().endOf("month")
	});
});

test("should set sort_by to amount ", () => {
	const state = filters_reducer(undefined, {type:"SORT_BY_AMOUNT"});
	expect(state.sort_by).toBe("amount");
});


test("should set sort_by to date ", () => {
	const current_state = {
		text:"",
		start_date:undefined,
		end_date:undefined,
		sort_by:"amount"
	};
	
	const action = {type:"SORT_BY_DATE"};
	const state = filters_reducer(current_state, action)
	expect(state.sort_by).toBe("date");
});

test("should set text filter", () => {
	const text = "hello world";
	const state = filters_reducer(undefined, {type:"SET_TEXT_FILTER",text:"hello world"});
	expect(state.text).toBe(text);
});

test("should set start_date filter", () => {
	const start_date = moment();
	const state = filters_reducer(undefined, {type:"SET_START_DATE",start_date:start_date});
	expect(state.start_date).toBe(start_date);
});

test("should set end_date filter", () => {
	const end_date = moment();
	const state = filters_reducer(undefined, {type:"SET_END_DATE",end_date:end_date});
	expect(state.end_date).toBe(end_date);
});
