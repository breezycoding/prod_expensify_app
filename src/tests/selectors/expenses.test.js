import moment from "moment";
import select_expenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses";


test("should filter by text value", () => {
	
	const filters = {
		text:"e",
		sort_by:"date",
		start_date:undefined,
		end_date:undefined
	};
	const result = select_expenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by start date", () => {
	const filters = {
		text:"",
		sort_by:"date",
		start_date: moment(0),
		end_date:undefined
	};
	
	const result = select_expenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]);
	
});

test("should filter by end date", () => {
	const filters = {
		text:"",
		sort_by:"date",
		start_date: undefined,
		end_date:moment(0).add(2, "days")
	}
	
	const result = select_expenses(expenses, filters);
	expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should filter by date", () => {
	const filters = {
		text:"",
		sort_by:"date",
		start_date: undefined,
		end_date:undefined
	}
	
	const result = select_expenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should filter by amount", () => {
	const filters = {
		text:"",
		sort_by:"amount",
		start_date: undefined,
		end_date:undefined
	}
	
	const result = select_expenses(expenses, filters);
	expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});