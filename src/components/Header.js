import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
	<header>
		<h1>Expensify App</h1>
		<ul>
			<li><NavLink to="/" activeClassName="is_active" exact={true}>HOME</NavLink></li>
			<li><NavLink to="/create" activeClassName="is_active">ADD</NavLink></li>
			<li><NavLink to="/edit" activeClassName="is_active">EDIT</NavLink></li>
			<li><NavLink to="/help" activeClassName="is_active">HELP</NavLink></li>
		</ul>
	</header>
);

export default Header;