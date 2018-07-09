import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import Create_page from "../components/Create_page";
import Dashboard_page from "../components/Dashboard_page";
import Header from "../components/Header";
import Page_not_found from "../components/Page_not_found";
import Edit_page from "../components/Edit_page";
import Help_page from "../components/Help_page";


const App_router = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Dashboard_page} exact={true}/>
				<Route path="/create" component={Create_page} />
				<Route path="/edit/:id" component={Edit_page} />
				<Route path="/help" component={Help_page} />
				<Route component={Page_not_found} />
			</Switch>	
		</div>
	</BrowserRouter>
);

export default App_router;