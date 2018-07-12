import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App_router from "./routers/App_router";
import configure_store from "./store/configure_store";
import {add_expense} from "./actions/expenses";
import {set_text_filter} from "./actions/filters";
import get_visible_expenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configure_store();
console.log("test");
const jsx = (
	<Provider store={store}>
		<App_router />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

/*
	-we add div inside BrowserRouter in order to add multiple routes
*/

