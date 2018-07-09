import moment from "moment";
import {set_start_date, set_end_date, sort_by_date, sort_by_amount, set_text_filter} from "../../actions/filters";

test("should generate set start date action object", () => {
	const action = set_start_date(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		start_date: moment(0)
	});
});

test("should generate set end date action object", () => {
	const action = set_end_date(moment(0));
	expect(action).toEqual({
		type:"SET_END_DATE",
		end_date:moment(0)
	});
});

test("should generate set text filter action by value", () => {
	const text = "Something in";
	const action = set_text_filter(text);
	expect(action).toEqual({
		type:"SET_TEXT_FILTER",
		text
	});
});

test("should generate set text filter action by value", () => {
	const action = set_text_filter();
	expect(action).toEqual({
		type:"SET_TEXT_FILTER",
		text: ""
	});
});

test("should generate sort by date action object", () => {
	expect(sort_by_date()).toEqual({type: "SORT_BY_DATE"});
});

test("should generate sort by date action object", () => {
	expect(sort_by_amount()).toEqual({type: "SORT_BY_AMOUNT"});
});