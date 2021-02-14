import React, { Component } from "react";
import contacticont from "../images/contacticont.png";




class DeleteContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
   
    };

  }
  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(e,index);
this.props.reduceCheckboxArray(index);
  };

  imgSrc = (contact) => {
    if (contact.pictureL[0] === "h") {
      return contact.pictureL;
    }

    return contacticont;
  };

  allCountacts = () => {
    const list = this.props.contacts.map((contact, index) => (
      <li key={index} className={"list-group-item clearfix displaylist"}>
        {" "}
        <img
          src={this.imgSrc(contact)}
          alt="icon"
          className="thumbnail ml-2"
        />{" "}
        {contact.firstName} {contact.lastName}
        <button
          onClick={(e) => this.deleteContact(e, index)}
          className="btn btn-danger form-control  deletebutton"
        >
          Delete
        </button>import React, { Component } from "react";
import contacticont from "../images/contacticont.png";




class DeleteContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
   
    };

  }
  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(e,index);
this.props.reduceCheckboxArray(index);
  };

  imgSrc = (contact) => {
    if (contact.pictureL[0] === "h") {
      return contact.pictureL;
    }

    return contacticont;
  };

  allCountacts = () => {
this.props.contacts.sort(function (a, b) {
      var nameA = a.firstName.toUpperCase();
      var nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

   const mappedList = this.props.contacts.map((contact, index) => (
      <li key={index} className={"list-group-item clearfix displaylist"}>
        {" "}
        <img
          src={this.imgSrc(contact)}
          alt="icon"
          className="thumbnail ml-2"
        />{" "}
        {contact.firstName} {contact.lastName}
        <button
          onClick={(e) => this.deleteContact(e, index)}
          className="btn btn-danger form-control  deletebutton"
        >
          Delete
        </button>
        <input
          type="checkbox"
          class="checkbox"
          name="checkbox"
          checked={this.props.checkbox[index]}
          onChange={(e) => this.props.handleCheckboxChange(index, e)}
        />
      </li>

    ));


    return mappedList
  };

  render() {
console.log(this.props.checkbox)
    return (
      <React.Fragment>

        <ul>{this.allCountacts()}</ul>
      </React.Fragment>
    );
  }
}


export default DeleteContacts;

        <input
          type="checkbox"
          class="checkbox"
          name="checkbox"
          checked={this.props.checkbox[index]}
          onChange={(e) => this.props.handleCheckboxChange(index, e)}
        />
      </li>

    ));


    return list;
  };

  render() {
console.log(this.props.checkbox)
    return (
      <React.Fragment>

        <ul>{this.allCountacts()}</ul>
      </React.Fragment>
    );
  }
}


export default DeleteContacts;
