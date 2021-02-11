import React from "react";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import contacticonl from "../images/contacticonl.png";

function ListView(props) {
  function deleteContact(e, index) {
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

  function imgSrc() {
    if (props.data.pictureL[0] !== "h") {
      return contacticonl;
    }
    console.log(props.data.pictureL);
    return props.data.pictureL;
  }

  return (
    <React.Fragment>
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-12 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <a href="#dead">
                      <img
                        src={imgSrc()}
                        key={props.index}
                        className="rounded-circle"
                        alt="contactimg"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between"></div>
              </div>
              <div className="card-body pt-0 pt-md-4">
                <div className="row">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    {props.data.title} {props.data.firstName}{" "}
                    {props.data.lastName}
                  </h3>
                  <div className="h5 font-weight-300">
                    <img
                      src="https://i.pinimg.com/originals/b5/d7/19/b5d7198734ee5174b581630628ecfdd6.png
"
                      alt=""
                      className="imgphone"
                    />{" "}
                    {props.data.phone}
                  </div>
                  <div className="h5 font-weight-300">
                    <img
                      src="https://img.pngio.com/cell-phone-free-technology-icons-cell-phone-icon-png-1200_630.png
"
                      alt=""
                      className="imgphone"
                    />
                    {props.data.cell}{" "}
                  </div>
                  <div className="h5 font-weight-300">
                    <img
                      src="                                   https://cdn1.iconfinder.com/data/icons/real-estate-84/64/x-24-512.png

"
                      alt=""
                      className="imgphone"
                    />{" "}
                    {props.data.streetNumber+ ','}{' '}{props.data.streetName}
                  </div>

                  <div className="h5 font-weight-300">
                    <img
                      src="https://static.thenounproject.com/png/14236-200.png"
                      alt=""
                      className="imgphone"
                    />{" "}
                    {props.data.city + ','}{' '}{props.data.state + ','}{' '}{props.data.country}
                  </div>

                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2"></i>Solution
                    Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2"></i>University of
                    Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#dead">Show more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={props.displayList}>
        {/* <div className="">
          <img
            src={imgSrc()}
            key={props.index}
            className="form-control p-3  contactimage"
            alt="contactimg"
          />
        </div>
        <div className="">
          <li key={props.index} className="form-control p-3">
            <span>Title:</span> {props.data.title}
          </li>
        </div>
        <div className="">
          <li key={props.index} className="form-control p-3">
            <span> Firestname:</span> {props.data.firstName}
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
        </div>*/}
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
          onClick={(e) => deleteContact(e, props.index)}
          className="btn btn-danger form-control  m-2"
        >
          Delete Contact
        </button>
      </div>
    </React.Fragment>
  );
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
      pictureT
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
          pictureT
        )
      ),

    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
