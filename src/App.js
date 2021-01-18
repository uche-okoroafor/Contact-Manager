import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./actions/contactAction";
import "./App.css";
import SearchBar from "./components/Search";
import ListView from "./components/listView";
import Form from "./components/form";
import AllContacts from "./components/allContacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      apiContact: null,
      title: "",
      firstName: "",
      lastName: "",
      cell: "",
      streetName: "",
      streetNumber: "",
      city: "",
      state: "",
      country: "",
      postcode: "",
      email: "",
      phone: "",
      pictureL: "",
      pictureM: "",
      pictureT: "",
      index: "",
      outline: {},
      displayFormError: { color: "red", display: "none" },
      activeClick:{ },
      displayList: { color: "red", display: "none" },
      displayForm: { display: "block" },
      displayEditBtn: { display: "none" },
      displayAddBtn: { display: "block" },
      displaySearchReturn: { display: "none" },
      emptyContactDisplay: { display: "none" },
      targetContact: this.props.contacts,
    };
  }

  async componentDidMount() {
    for (let i = 0; i < 30; i++) {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const info = await response.json();
      const data = info.results[0];

      let title = { title: data.name.title };
      let firstName = { firstName: data.name.first };
      let lastName = { lastName: data.name.last };
      let streetNumber = { streetNumber: data.location.street.number };
      let streetName = { streetName: data.location.street.name };
      let city = { city: data.location.city };
      let state = { state: data.location.state };
      let country = { country: data.location.country };
      let postCode = { postCode: data.location.postCode };
      let email = { email: data.email };
      let phone = { phone: data.phone };
      let cell = { cell: data.cell };
      let pictureL = { pictureL: data.picture.large };
      let pictureM = { pictureM: data.picture.medium };
      let pictureT = { pictureT: data.picture.thumbnail };
      this.props.createContact(
        title,
        firstName,
        lastName,
        streetName,
        streetNumber,
        city,
        state,
        country,
        postCode,
        email,
        phone,
        cell,
        pictureL,
        pictureM,
        pictureT
      );
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    if (this.state.firstName !== "" && this.state.cell !== "") {
      e.preventDefault();
      let title = { title: this.state.title };
      let firstName = { firstName: this.state.firstName };
      let lastName = { lastName: this.state.lastName };
      let streetNumber = { streetNumber: this.state.streetNumber };
      let streetName = { streetName: this.state.streetName };
      let city = { city: this.state.city };
      let state = { state: this.state.state };
      let country = { country: this.state.country };
      let postCode = { postCode: this.state.postCode };
      let email = { email: this.state.email };
      let phone = { phone: this.state.phone };
      let cell = { cell: this.state.cell };
      let pictureL = { pictureL: this.state.pictureL };
      let pictureM = { pictureM: this.state.pictureM };
      let pictureT = { pictureT: this.state.pictureT };
      this.props.createContact(
        title,
        firstName,
        lastName,
        streetName,
        streetNumber,
        city,
        state,
        country,
        postCode,
        email,
        phone,
        cell,
        pictureL,
        pictureM,
        pictureT
      );

      this.setState({
        title: "",
        firstName: "",
        lastName: "",
        streetName: "",
        streetNumber: "",
        city: "",
        state: "",
        country: "",
        postCode: "",
        email: "",
        phone: "",
        cell: "",
        pictureL: "",
        pictureM: "",
        pictureT: "",
      });
    } else {
      this.toggleDisplay("displayFormError");
      e.preventDefault();
    }
  }

  expandContact = (id) => {
    const filtered = this.props.contacts.filter((data, i) => i === id);
    this.setState({ targetContact: filtered, index: id });
    this.toggleDisplay("displayList");
  };

 editContact = (e, i) => {
    e.preventDefault();

    this.setState({
      title: this.state.targetContact[0].title,
      firstName: this.state.targetContact[0].firstName,
      lastName: this.state.targetContact[0].lastName,
      streetNumber: this.state.targetContact[0].streetNumber,
      streetName: this.state.targetContact[0].streetName,
      city: this.state.targetContact[0].city,
      state: this.state.targetContact[0].state,
      country: this.state.targetContact[0].country,
      postcode: this.state.targetContact[0].postcode,
      email: this.state.targetContact[0].email,
      phone: this.state.targetContact[0].phone,
      cell: this.state.targetContact[0].cell,
      pictureL: this.state.targetContact[0].pictureL,
      pictureM: this.state.targetContact[0].pictureM,
      pictureT: this.state.targetContact[0].mobileNumber,
    });
    this.toggleDisplay("buttonDisplay1");
  };


  submitEdit = (e, i) => {
    this.deleteContact(e, this.state.index);
    this.handleSubmit(e);
    this.toggleDisplay("buttonDisplay2");
    setTimeout(() => {
      this.expandContact(this.props.contacts.length - 1);
    }, 100);
  };

  cancelEdit = (e) => {
    this.setState({
      title: "",
      firstName: "",
      lastName: "",
      streetName: "",
      streetNumber: "",
      city: "",
      state: "",
      country: "",
      postCode: "",
      email: "",
      phone: "",
      cell: "",
      pictureL: "",
      pictureM: "",
      pictureT: "",
    });
    this.expandContact(this.state.index);
  }; 

  toggleDisplay = (action) => {
    switch (action) {
      case "displayList":
        this.setState({
          displayList: { display: "block" },
          displayForm: { display: "none" },
          displaySearchReturn: { display: "none" },
        });
        break;
      case "displayForm":
        this.setState({
          displayList: { display: "none" },
          displayForm: { display: "block" },
          emptyContactDisplay: { display: "block" },
        });

        break;

      case "searchdisplay":
        this.setState({
          displayList: { display: "none" },
          displayForm: { display: "none" },
          displaySearchReturn: { display: "block" },
        });

        break;

      case "buttonDisplay1":
        this.setState({
          displayAddBtn: { display: "none" },
          displayEditBtn: { display: "block" },
          displayList: { display: "none" },
          displayForm: { display: "block" },
        });
        break;

      case "buttonDisplay2":
        this.setState({
          displayAddBtn: { display: "block" },
          displayEditBtn: { display: "none" },
        });

        break;

      case "displayFormError":
        this.setState({
          displayFormError: {
            color: "red",
            display: "inline",
            fontSize: "14px",
            textAlign: "left",
          },
          outline: { border: "1px solid red" },
        });
        break;
 case "activeClick":
        this.setState({
         activeClick: {backgroundColor:'rgba(76, 153, 73, 0.918)',}
        });
        break;


      default:
        break;
    }
  };

 


  render() {
    return (
      <div className='contact-body'>
        <h1 className="text-center">Contacts Manager</h1>
        <hr />
        <div className="container-fluid text-center">
          <div class="row content">
            <div className="col-sm-3 allcontacts">
              <h5 className="text-center">All Contacts</h5>
              <hr />
              <ul>
                {this.props.contacts.map((contact, index) => (
                  <AllContacts
                    contact={contact}
                    index={index}
                    expandContact={this.expandContact}
                    activeClick={this.state.activeClick}
                    toggleDisplay={this.toggleDisplay}
                  />
                ))}
                <div style={this.state.emptyContactDisplay}>
                  contact is empty
                </div>
              </ul>
            </div>
            <div className="col-sm-6 text-center contact-form">
              <SearchBar
                expandContact={this.expandContact}
                filteredSearch={this.state.filteredSearch}
                displaySearchReturn={this.state.displaySearchReturn}
                toggleDisplay={this.toggleDisplay}
              />

              <Form
                title={this.state.title}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                streetName={this.state.streetName}
                streetNumber={this.state.streetNumber}
                city={this.state.city}
                state={this.state.state}
                country={this.state.country}
                postCode={this.state.postCode}
                email={this.state.email}
                phone={this.state.phone}
                cell={this.state.cell}
                pictureL={this.state.pictureL}
                pictureM={this.state.pictureM}
                pictureT={this.state.pictureT}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                display={this.state.displayFormError}
                outline={this.state.outline}
                displayForm={this.state.displayForm}
                displayEditBtn={this.state.displayEditBtn}
                displayAddBtn={this.state.displayAddBtn}
                submitEdit={this.submitEdit}
                cancelEdit={this.cancelEdit}
              />
              {
                <ul className="list-group">
                  {this.state.targetContact.map((contact, index) => (
                    <ListView
                      data={contact}
                      index={index}
                      displayList={this.state.displayList}
                      editContact={this.editContact}
                      deleteContact={this.deleteContact}
                      expandContact={this.expandContact}
                      toggleDisplay={this.toggleDisplay}
                    />
                  ))}
                </ul>
              }
            </div>
            <div className="col-sm-3 sidenav">
              <button
                className="form-control  bg-success  m-2"
                onClick={() => this.toggleDisplay("displayForm")}
              >
                Create New Contact
              </button>
            </div>
          </div>
        </div>
      </div>
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
      streetName,
      streetNumber,
      city,
      state,
      country,
      postCode,
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
          streetName,
          streetNumber,
          city,
          state,
          country,
          postCode,
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
