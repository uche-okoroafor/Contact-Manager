import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import  Button  from './form';
import List from './list';




const initialState ={
contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"] 
};

function reducer(state=initialState,action){

switch(action.type){
case "ADD_PERSON":
return {
...state,contacts:[...state.contacts,action.data]}
default:
return state;

}

}

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
<Button></Button>
<List/>
</Provider> 
,document.getElementById("root")
)
