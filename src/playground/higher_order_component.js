import React from "react";
import ReactDOM from "react-dom";
/*Higher order component setup*/

/*
	-steps 
		1.create HOC component
			-HOC has ordinary component parameter 
			-ordinary component will have access on HOC props
		2.out 0f HOC we will create another component in this case "Admin_info"
		3.this new component will have access to "redux store"
	-this will allow us to reuse code adding "const with_admin_warning " to as many components as we want
*/

/*ordinary component*/
const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);
/*ordinary component*/

/*HOC Component*/
const with_admin_warning = (Wrapped_component) => {
	return (props) => (
		<div>
			{props.is_admin && <p>This is private info please dont share</p>}
			 {/*we can create spread operator to pass in props as key value pair in ordinary component*/}
			<Wrapped_component {...props}/>
		</div>
	);
}
/*practice HOC*/
const require_authenticated = (Wrapped_component) => {
	return (props) => (
		<div>
			{props.is_authenticated ? (
			 	<Wrapped_component {...props}/>
			) : ( 
				<p>Please login to view info</p>
			)}
		</div>
	);
}
/*practice HOC*/
/*HOC Component*/

const Admin_info = with_admin_warning(Info);

/*practice HOC*/
const Auth_info = require_authenticated(Info);
/*practice HOC*/

/*Higher order component setup*/

//ReactDOM.render(<Admin_info is_admin={false} info="These are the details" />, document.getElementById("app"));
ReactDOM.render(<Auth_info is_authenticated={true} info="These are the details" />, document.getElementById("app"));