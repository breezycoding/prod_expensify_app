import { createStore } from "redux";
//Action generators - functions that return action objects
const increment_count = ({increment_by = 1} = {}) => ({
	type:"INCREMENT",
	increment_by
});
const decrement_count = ({decrement_by = 1} = {}) => ({
	type:"DECREMENT",
	decrement_by
});
const set_count = ({count} = {}) => ({
	type:"SET",
	count
});
const reset_count = () => ({
	type:"RESET"
});
const count_reducer = ((state = {count:0}, action)=> {
	switch(action.type){
		case "INCREMENT" :
 			return{
			   count:state.count + action.increment_by
		   };
		case "DECREMENT" :
			return{
			   count:state.count - action.decrement_by
		   };
		case "SET" :
			return{
				count:action.count
			};
		case "RESET" :
			return{
			   count:0
		   };
		default:
			return state;	
	}
});
const store  = createStore(count_reducer);

const unscubscribe = store.subscribe(()=>{
	console.log(store.getState());
});

/*
	Actions - object that gets sent to the store
*/



//steps
//Id like to increment the count
/*
	type - is the action
	INCREMENT - is the action type
		uppercase is the convention for action type
	-we send this object to the store
		{
			type:"INCREMENT"
		}
	-dispatch - allows us to send action object. and store could do something in this information
	-now were going to combine action to the current state
	if(action.type === "INCREMENT"){
	   return{
		   count:state.count + 1;
	   }
   }else{
	   return state;
   }
*/
store.dispatch(increment_count({increment_by:5}));

store.dispatch(increment_count({}));

store.dispatch(decrement_count());

store.dispatch(decrement_count({decrement_by:5}));

store.dispatch(set_count({count:101}));

store.dispatch(reset_count({count:0}));



