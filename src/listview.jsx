import React from "react";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";

function ListView(props) {



 function  deleteContact(e, index) {
    e.preventDefault();
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
        <li key={props.index} className="form-control p-3">
          Name: {props.data.name}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          NickName: {props.data.nickName}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          MobileNumber: {props.data.mobileNumber}
        </li>
      </div>
      <div className="">
        <li key={props.index} className="form-control p-3">
          Address: {props.data.address}
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
    createContact: (nickName, name, mobileNumber, address, id) =>
      dispatch(
        contactAction.createContact(nickName, name, mobileNumber, address, id)
      ),

    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)( ListView);
