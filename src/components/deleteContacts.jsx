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


ischecked=(index)=>{
const filtered = this.props.checkbox.filter((contacts)=>contacts.id === index );
console.log(index,filtered[0].checkbox);
return filtered[0].checkbox
}


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

   const mappedList = this.props.contacts.map((contact) => (
      <li key={contact.id} className={"list-group-item clearfix displaylist"}>
        {" "}
        <img
          src={this.imgSrc(contact)}
          alt="icon"
          className="thumbnail ml-2"
        />{" "}
        {contact.firstName} {contact.lastName}
        <button
          onClick={(e) => this.deleteContact(e, contact.id)}
          className="btn btn-danger form-control  deletebutton"
        >
          Delete
        </button>
        <input
          type="checkbox"
          class="checkbox"
          name="checkbox"
          checked={this.ischecked(contact.id)}
          onChange={(e) => this.props.handleCheckboxChange(contact.id, e)}
        />

      </li>

    ));


    return mappedList
  };

  render() {
// console.log(document.getElementsByTagName('li'))
    return (
      <React.Fragment>

        <ul>{this.allCountacts()}</ul>
      </React.Fragment>
    );
  }
}


export default DeleteContacts;
