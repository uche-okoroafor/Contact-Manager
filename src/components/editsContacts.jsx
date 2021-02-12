import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import contacticont from "../images/contacticont.png";

class EditContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

 imgSrc = (contact) => {
    if (contact.pictureL[0] === "h") {
      return contact.pictureL;
    }

    return contacticont;
  };

  allCountacts = () => {
    const list = this.props.contacts.map((contact, index) => (
      <li key={index} className={"list-group-item clearfix  displayEditlist"}>
        {" "}
        <img
          src={this.imgSrc(contact)}
          alt="icon"
          className="thumbnail ml-2"
        /><span>{" "}
        {contact.firstName} {contact.lastName}</span>

        <button
          onClick={(e) => this.props.editContact(e, index)}
          className="btn btn-info"
        >
          Edit Contact
        </button> 
      </li>
    ));

    return list;
  };

  render() {
    return (
      <React.Fragment>
<div className="editcontacts">
        <ul>{this.allCountacts()}</ul>

</div>
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
    createContact: (
      title,
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
      pictureT,
      isChecked
    ) =>
      dispatch(
        contactAction.createContact(
          title,
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
          pictureT,
          isChecked
        )
      ),

    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContacts);
