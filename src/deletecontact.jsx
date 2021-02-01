import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import contacticont from "../images/contacticont.png";

class DeleteContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // checkbox: [
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      //   false,
      // ],
    checkbox:this.props.checkbox,
     
    };
  }

  createArray = () => {
    this.setState({
  checkbox:this.props.contacts.map((contacts)=>contacts.isChecked)
    });
console.log(this.state.checkbox);
  };

  //  e.preventDefault();

  // let checkbox = { checkbox: this.state.checkbox };
  // this.props.createContact()

  // console.log(this.state.checkbox)
  // }

  handlechange = (index, e) => {
    let arr = this.state.checkbox;
    arr[index] = e.target.checked;
    this.setState({
      checkbox: arr,
    });
 
  };

  // handleChange=(e)=>{

  // // if(e.target.value === 'false'){ e.target.value ='true'}

  // // if(e.target.value === 'true'){

  // // e.target.value='false';
  // // }

  // e.target.value ='true'

  // this.setState({
  // checkbox:this.state.checkbox+1
  // });
  // }

  handledelete = (e) => {
let checkedbox = document.getElementsByClassName("checkbox");  
    for (let i = 0; i < checkedbox.length; i++) {
      if (checkedbox[i].checked === true ) {
        this.deleteContact(e, i);
let arr = this.state.checkbox;
arr.splice(i, 1);
this.setState({
checkbox:arr
})

      }
    }
console.log(this.state.checkbox,checkedbox.length,this.state.checkbox.length)
  };



  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(index);
this.createArray()
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
        </button>
        <input
          type="checkbox"
          class="checkbox"
          name="checkbox"
          checked={this.state.checkbox[index]}
          //   onClick={this.handleChange}
          onChange={(e) => this.handlechange(index, e)}
        />
      </li>
    ));

    return list;
  };

  render() {
    return (
      <React.Fragment>
        <ul>{this.allCountacts()}</ul>

        <button className="btn bg-danger" onClick={this.handledelete}>
          btndele
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContacts);
