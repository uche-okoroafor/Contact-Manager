import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import  Button  from './form';
import List from './list';




const initialState ={
persons: ["James Smith", "Thomas Anderson", "Bruce Wayne"],
numbers:['2233555','55556666','455555566'],
address: ['no1','no2','no3']
};



export function addPerson(persons,numbers,address){
return{
type:"ADD_PERSON",
data:persons,
info:numbers,
file:address
}
}

function reducer(state= initialState,action){

switch(action.type){
case "ADD_PERSON":
return {
...state,contacts:[...state.persons,action.data],
...state,numbers:[...state.numbers,action.info],
...state,address:[...state.address,action.file]

}
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
