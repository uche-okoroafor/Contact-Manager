import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import contacticont from "../images/contacticont.png";



export function handleAllDelete (props){
    for (let i = 0; i < props.checkbox.length; i++) {
      if (props.checkbox[i] === true) {
        props.deleteContact(props.e, i);
      }
    }
  };




const DeleteContacts =(props)=> {
   
     const [checkbox,setCheckbox]= useState([]);

// useEffect(
// ()=>createArrayFalse(),[props.contacts]
// )


//  const createArrayFalse = () => {
//     let arr = checkbox;
//     for (let i = 0; i < 34; i++) {
//       arr = [...arr, false];
//     }
//    setCheckbox(arr) ;
//   };

// const createArrayTrue = () => {
//     let arr =checkbox;
//     for (let i = 0; i < 34; i++) {
//       arr = [...arr, true];
//     }
//     setCheckbox(arr) ;
//   };


 const handlechange = (index, e) => {
    let arr = checkbox;
    arr[index] = e.target.checked;
     setCheckbox(arr) ;
  };





const runFunction=(e,activate)=>{

if(activate==='DeleteSelectedContacts')
{

handleAllDelete(e);
}
else if(activate==='SelectAllContacts'){
createArrayTrue();
}
}










 const  deleteContact = (e, index) => {
    e.preventDefault();
   props.deleteContact(index);
  createArrayFalse();
  };

 const imgSrc = (contact) => {
    if (contact.pictureL[0] === "h") {
      return contact.pictureL;
    }

    return contacticont;
  };

 const allCountacts = () => {
    const list = props.contacts.map((contact, index) => (
      <li key={index} className={"list-group-item clearfix displaylist"}>
        {" "}
        <img
          src={imgSrc(contact)}
          alt="icon"
          className="thumbnail ml-2"
        />{" "}
        {contact.firstName} {contact.lastName}
        <button
          onClick={(e) => deleteContact(e, index)}
          className="btn btn-danger form-control  deletebutton"
        >
          Delete
        </button>
        <input
          type="checkbox"
          class="checkbox"
          name="checkbox"
          checked={this.state.checkbox[index]}
          onChange={(e) =>handlechange(index, e)}
        />
      </li>
    ));

    return list;
  };


  return (
      <React.Fragment>
        <ul>{allCountacts()}</ul>

        <button className="btn bg-danger" onClick={handleAllDelete}>
          btndele
        </button>
<input type="text" value={(e)=>runFunction(e,props.activate)} style={{display:'none'}}/>
      </React.Fragment>
    );


};


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
