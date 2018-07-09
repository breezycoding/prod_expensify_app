import React from "react";
import { Link } from "react-router-dom";

const Expense_list_item = ({id, description, amount, created_at}) => (
	<div>
		<Link to={"/edit/"+id+""}>
			<h3>{description}</h3>
		</Link>
		<p>{amount} - {created_at}</p>
	</div>
);

export default Expense_list_item;
