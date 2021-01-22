import React from "react";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";

function ListView(props) {



 function  deleteContact(e, index) {
    e.preventDefault();
console.log(index);
    props.deleteContact(index);
    if (props.contacts.length === 1) {
      props.toggleDisplay("displayForm");
    } else {
      setTimeout(() => {
        props.expandContact(0);
      }, 10);
    }
  }


  return (
    <div className="row" style={props.displayList}>
   <div className="">
        <img src={props.data.pictureL} key={props.index} className="form-control p-3  contactimage" alt='contactimg'/>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
         <span>Title:</span> {props.data.title}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          <span> Firestname:</span>  {props.data.firstName}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          Lastname: {props.data.lastName}
        </li>
      </div>

    <div className="">
        <li key={props.index} className="form-control p-3">
          Phone: {props.data.phone}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          Cell: {props.data.cell}
        </li>
      </div>

      <div className="">
        <li key={props.index} className="form-control p-3">
          Streetnumber: {props.data.streetNumber}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          streetNumber: {props.data.streetNumber}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          City: {props.data.city}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          State: {props.data.state}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
         Country: {props.data.country}
        </li>
      </div>
        <div className="">
        <li key={props.index} className="form-control p-3">
          postcode: {props.data.postcode}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          Email: {props.data.email}
        </li>
      </div>
  

      <button
        className="btn bg-success  form-control m-2"
        onClick={(e) => props.editContact(e, props.index)}
      >
        Edit Contact
      </button>

      <button
        onClick={(e) =>deleteContact(e, props.index)}
        className="btn btn-danger form-control  m-2"
      >
        Delete Contact
      </button>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)( ListView);
