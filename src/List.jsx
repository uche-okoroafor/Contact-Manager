import React  from 'react';
import {connect} from 'react-redux';

 function List(props){
const contact = props.persons;
const numbers = props.numbers;
const address = props.address;
const listitems = contact.map((list,index)=> <li key={index}>{list}</li> );
const listnum = numbers.map((list,index)=> <li key={index}>{list}</li> );
const listaddr = address.map((list,index)=> <li key={index}>{list}</li> );

return<div> <ul>{listitems}</ul>
<ul>{listnum}</ul>
<ul>{listaddr}</ul>
</div>
 }

function mapStateToProps(state){
return{
persons:state.persons,
numbers:state.numbers,
address:state.address
}
}


export default connect (mapStateToProps)(List);
