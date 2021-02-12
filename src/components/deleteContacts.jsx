import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import contacticont from "../images/contacticont.png";







class DeleteContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkbox: this.props.checkbox,
    };

  }

  componentDidMount() {
    this.createArrayFalse()
  }

  createArrayFalse = () => {
    let arr = this.state.checkbox;
    for (let i = 0; i < 34; i++) {
      arr = [...arr, false];
    }
    this.setState({
      checkbox: arr,
    });
  };

 createArrayTrue = () => {
    let arr = this.state.checkbox;
    for (let i = 0; i < 34; i++) {
      arr = [...arr, true];
    }
    this.setState({
      checkbox: arr,
    });
  };


  handlechange = (index, e) => {
    let arr = this.state.checkbox;
    arr[index] = e.target.checked;
    this.setState({
      checkbox: arr,
    });
  };


handleAllDelete = (e) => {

    for (let i = 0; i < this.state.checkbox.length; i++) {
      if (this.state.checkbox[i] === true) {
        this.deleteContact(e, i);
        let arr = this.state.checkbox;
        arr.splice(i, 1);
        this.setState({
          checkbox: arr,
        });
      }
    }

  };


runFunction=(e,activate)=>{
console.log(activate)
if(activate===1)
{
this.createArrayTrue();
}
}










  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(index);
    this.props.createArrayFalse();
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

        <button className="btn bg-danger" onClick={this.handleAllDelete}>
          btndele
        </button>
<input type="text" value={(e)=>this.runFunction(e,this.props.activate)} style={{display:'none'}}/>
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
