import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./actions/contactAction";
import "./App.css";
import SearchBar from "./components/Search";
import ContactDetails from "./components/contactDetails";
import AddContact from "./components/addcontact";
import AllContacts from "./components/allContacts";
import SideButtons from "./components/sideButtons";
import DeleteContacts from "./components/deleteContacts";
import EditContacts from "./components/editsContacts";
import RecentlyAdded from "./components/recentlyAdded";


class App extends Component {
  constructor(props) {
    super(props);
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
      searchInput: "",
      isChecked: false,
      outline: {},
     checkbox: [],
      activate:[],
      displayFormError: { color: "red", display: "none" },
      displayList: { color: "red", display: "none" },
      displayForm: { display: "block" },
      displayEditBtn: { display: "none" },
      displayAddBtn: { display: "block" },
      displaySearchReturn: { display: "none" },
      emptyContactDisplay: { display: "none", color: "red" },
      displayDeletecontacts: { display: "none" },
      displayDeleteBtn1: { display: "inline-block" },
      displayDeleteBtn2: { display: "none" },
      displayEditcontacts: { display: "none" },
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
      let isChecked = { isChecked: false };

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
        pictureT,
        isChecked
      );
    }
this.createArrayFalse()
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    if (this.state.firstName !== "" && this.state.phone !== "") {
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
      let isChecked = { isChecked: false };
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
        pictureT,
        isChecked
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
  };

  expandContact = (id, e) => {
    const filtered = this.props.contacts.filter((data, i) => i === id);
    this.setState({ targetContact: filtered, index: id });
    this.toggleDisplay("displayContactDetails");
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
    });
    this.toggleDisplay("displayEditContact");
  };

  submitEdit = (e, i) => {
    this.deleteContact(e, this.state.index);
    this.handleSubmit(e);
    this.toggleDisplay("buttonDisplay2");
    setTimeout(() => {
      this.expandContact(this.props.contacts.length - 1);
    }, 100);
  };

  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(index);
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
      case "displayContactDetails":
        this.setState({
          displayList: { display: "block" },
          displayForm: { display: "none" },
          displaySearchReturn: { display: "none" },
          searchInput: "",
          displayDeletecontacts: { display: "none" },
          displayDeleteBtn2: { display: "none" },
          displayDeleteBtn1: { display: "inline-block" },
          displayEditcontacts: { display: "none" },
        });
        break;
      case "displayCreateNewContact":
        this.setState({
          displayList: { display: "none" },
          displayForm: { display: "block" },
          displayDeletecontacts: { display: "none" },
          displayDeleteBtn2: { display: "none" },
          displayDeleteBtn1: { display: "inline-block" },
          displayEditcontacts: { display: "none" },
          displaySearchReturn: { display: "none" },
          searchInput: "",
  displayEditBtn: { display: "none"},
 displayAddBtn: { display: "block" },
        });

        break;

      case "searchdisplay":
        this.setState({
          displayList: { display: "none" },
          displayForm: { display: "none" },
          displaySearchReturn: { display: "block" },
          displayDeletecontacts: { display: "none" },
          displayDeleteBtn2: { display: "none" },
          displayDeleteBtn1: { display: "inline-block" },
          displayEditcontacts: { display: "none" },
        });

        break;

      case "displayEditContact":
        this.setState({
          displayAddBtn: { display: "none" },
          displayEditBtn: { display: "block" },
          displayList: { display: "none" },
          displayForm: { display: "block" },
          displayDeletecontacts: { display: "none" },
          displayEditcontacts: { display: "none" },
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

      case "displayDeleteContacts":
        this.setState({
          displayDeletecontacts: { display: "block" },
          displayList: { display: "none" },
          displayForm: { display: "none" },
          displayDeleteBtn2: { display: "inline-block" },
          displayDeleteBtn1: { display: "none" },
          displayEditcontacts: { display: "none" },
          displaySearchReturn: { display: "none" },
          searchInput: "",
        });
        break;

      case "displayAll4edit":
        this.setState({
          displayDeletecontacts: { display: "none" },
          displayEditcontacts: { display: "block" },
          displayList: { display: "none" },
          displayForm: { display: "none" },
          displayDeleteBtn1: { display: "inline-block" },
          displayDeleteBtn2: { display: "none" },
          displaySearchReturn: { display: "none" },
          searchInput: "",
        });
        break;



      default:
        break;
    }
  };

emptyContactList=()=>{
this.props.contacts.length ? 
this.setState({emptyContactDisplay:{display:'block'}})
 :
this.setState({emptyContactDisplay:{display:'none'}})
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
    let arr = [];
    for (let i = 0; i < 34; i++) {
      arr = [...arr, true];
    }
    this.setState({
      checkbox: arr,
    });

console.log(arr);
console.log(this.state.checkbox)
  };

  transferFunction = (num) => {
    this.setState({
      activate: num,
    });
  };

  render() {
// this.emptyContactList();
    return (
      <div className="contact-body">
        <div className="contact-header">
          <h1 className="text-center">Contacts Manager</h1>
          <hr  />
        </div>
        <div className="container-fluid text-center pt-10">
          <div class="">
            <div className="allcontacts pt-10">
              <div className="all-contactheading">
                <h5 className="text-center pt-3">All Contacts</h5>
              </div>
              <ul>
                {this.props.contacts.map((contact, index) => (
                  <AllContacts
                    contact={contact}
                    index={index}
                    expandContact={this.expandContact}
                    activeClick={this.state.activeClick}
                    id={this.state.index}
                  />
                ))}
                <div style={this.state.emptyContactDisplay}>
                  contact is empty
                </div>
              </ul>
            </div>
            <div className="contact-form">
              <div className="searchbar">
                <SearchBar
                  expandContact={this.expandContact}
                  filteredSearch={this.state.filteredSearch}
                  displaySearchReturn={this.state.displaySearchReturn}
                  toggleDisplay={this.toggleDisplay}
                  searchInput={this.state.searchInput}
                   
                />

                <AddContact
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

                <ul className="list-group">
                  {this.state.targetContact.map((contact, id) => (
                    <ContactDetails
                      data={contact}
                      index={this.state.index}
                      displayList={this.state.displayList}
                      editContact={this.editContact}
                      deleteContact={this.deleteContact}
                      expandContact={this.expandContact}
                      toggleDisplay={this.toggleDisplay}
                    />
                  ))}
                </ul>
                <div
                  className="deletecontacts"
                  style={this.state.displayDeletecontacts}
                >
                  <DeleteContacts
                    deleteContact={this.deleteContact}
                    toggleDisplay={this.toggleDisplay}
                    transferFunction={this.transferFunction}
                    activate={this.state.activate}
                    checkbox={this.state.checkbox}
                   createArrayFalse={this.createArrayFalse}
                  />
                </div>

                <div
                  className="Editcontacts"
                  style={this.state.displayEditcontacts}
                >
                  <EditContacts
                    editContact={this.editContact}
                    toggleDisplay={this.toggleDisplay}
                  />
                </div>
              </div>
            </div>

            <div className=" optionsbar">
              <div>
                <SideButtons
                  toggleDisplay={this.toggleDisplay}
                  displayDeleteBtn1={this.state.displayDeleteBtn1}
                  displayDeleteBtn2={this.state.displayDeleteBtn2}
                 createArrayTrue={this.transferFunction}
                />
              </div>
              <div className='recent-contact-heading'>
                <h5 className="text-center p-2">Recently Added Contacts</h5>
  </div>
                <div>
                  <RecentlyAdded
                        expandContact={this.expandContact}
                        activeClick={this.state.activeClick}
                        id={this.state.index}
                        contacts={this.props.contacts}
                      />
              
                    <div style={this.state.emptyContactDisplay}>
                      contact is empty
                </div>
              </div>
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
      pictureT,
      isChecked
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
          pictureT,
          isChecked
        )
      ),

    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
