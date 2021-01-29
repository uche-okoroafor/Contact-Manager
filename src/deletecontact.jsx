import React, { Component } from 'react';
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import contacticont from '../images/contacticont.png'




class DeleteContacts extends Component {
constructor(props){
super(props);

this.state={}
}
   

 deleteContact=(e, index)=> {
    e.preventDefault();
   this.props.deleteContact(index);
    
  }

 imgSrc=()=>{
if(this.props.contacts.pictureL[0] !== 'h'){

return contacticont;
}
return this.props.contacts.pictureL;
}






allCountacts=()=>{

const list = this.props.contacts.map((contact, index)=>(

     <li
          key={index}
        
          className={'list-group-item clearfix displaylist'}

        > <img src={this.imgSrc()}alt="icon"/>  {contact.firstName} {contact.lastName}
 <button
        onClick={(e) =>this.deleteContact(e,index)}
        className="btn btn-danger form-control  deletebutton"
      >
        Delete
      </button>
   
<input type="checkbox" />
        </li>
 


 ))
console.log(this.props.contacts)
    
return list;

}





    render() { 
        return ( 
<React.Fragment>
<ul>
{this.allCountacts()
}
</ul>
</React.Fragment>
 );
    
}
 
}




const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (    title,
    firstName,
    lastName,
    streetNum,
    streetName,
    city,
    state,
    country,
    postcode,
    email,
    phone,
    cell,
    pictureL,
    pictureM,
    pictureT) =>
      dispatch(
        contactAction.createContact(title,
    firstName,
    lastName,
    streetNum,
    streetName,
    city,
    state,
    country,
    postcode,
    email,
    phone,
    cell,
    pictureL,
    pictureM,
    pictureT)
      ),

    deleteContact:(index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)( DeleteContacts);
