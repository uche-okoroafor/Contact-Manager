import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./actions/contactAction";
import Form from "./components/form";
import "./App.css";
import SearchBar from './components/Search'


class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      nickName: "",
      mobileNumber: "",
      address: "",
      displayFormError: { color: "red", display: "none" },
      outline: {},
      displayList: { color: "red", display: "none" },
      displayForm: { display: "block" },
      displayEditBtn: { display: "none" },
      displayAddBtn: { display: "block" },
      displaySearchReturn: { display: "none" },
      targetContact: this.props.contacts,
      id: 4,
      index: "",
    };
  }

 handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  
  handleSubmit(e) {
    if (this.state.name !== "" && this.state.mobileNumber !== "") {
      e.preventDefault();
      let name = { name: this.state.name };

      let nickName = { nickName: this.state.nickName };

      let mobileNumber = { mobileNumber: this.state.mobileNumber };

      let address = { address: this.state.address };
      let id = { id: this.state.id };
      this.props.createContact(name, nickName, mobileNumber, address, id);

      this.setState({ name: "" });

      this.setState({ nickName: "" });

      this.setState({ mobileNumber: "" });

      this.setState({ address: "" });
      this.setState({ id: this.state.id + 1 });

      this.setState({
        display: { color: "red", display: "none", fontSize: "14px" },
      });
      this.setState({ outline: {} });
    } else {
      this.setState({
        display: { color: "red", display: "inline", fontSize: "14px" },
      });
      this.setState({ outline: { border: "1px solid red" } });

      e.preventDefault();
    }
  }

  listView(data, index) {
    return (
      <div className="row" style={this.state.displayList}>
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            Name: {data.name}
          </li>
        </div>
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            NickName: {data.nickName}
          </li>
        </div>
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            MobileNumber: {data.mobileNumber}
          </li>
        </div>
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            Address: {data.address}
          </li>
        </div>
      
          <button
            onClick={(e) =>  this.deleteContact(e,index) }
            className="btn btn-danger m-2 col-md-10 "
          >
            Delete Contact
          </button>
      

             <button
          className="btn bg-success  col-md-10 m-2"
          onClick={(e) => this.editContact(e,index)}
        >
          Edit Contact
        </button>

      </div>
    );
  }

  deleteContact(e, index) {
    e.preventDefault();
    this.props.deleteContact(index);
if(this.props.contacts.length === 0){
this.toggledisplay() }else{
setTimeout(() => {this.expandContact(this.props.contacts.length-1)
  },10);}
  }

  expandContact = (id,) => {

    const filtered = this.props.contacts.filter((data, i) => i === id);
    this.setState({ targetContact: filtered });
    this.setState({ displayList: { display: "block" } });
    this.setState({ displayForm: { display: "none" } });
     this.setState({index:id});
  };

  allcontact(data, index) {

    return (
      <div className="col-md-10">
        <li
          key={index}
          className="list-group-item clearfix  displaylist"
          onClick={(e) => this.expandContact(index, e)}
        >
          {data.name}
        </li>
      </div>
    );
  }

  toggledisplay = () => {
    let i = 1;
    if (i % 2 === 0) {
      this.setState({ displayList: { display: "block" } });
      this.setState({ displayForm: { display: "none" } });
      i++;
    } else {
      this.setState({ displayList: { display: "none" } });
      this.setState({ displayForm: { display: "block" } });
      i++;
    }
  };


editContact=(e,i)=>{
e.preventDefault();
this.toggledisplay();
this.setState({name:this.state.targetContact[0].name});
this.setState({nickName:this.state.targetContact[0].nickName});
this.setState({mobileNumber:this.state.targetContact[0].mobileNumber});
this.setState({address:this.state.targetContact[0].address});
  this.setState({ displayAddBtn: { display: "none" } });
  this.setState({ displayEditBtn: { display: "block" } });

}

submitEdit=(e, i)=>{
this.deleteContact(e, this.state.index);
this.handleSubmit(e);

  this.setState({ displayAddBtn: { display: "block" } });
  this.setState({ displayEditBtn: { display: "none" } });
setTimeout(() => {this.expandContact(this.props.contacts.length-1)
  },100);
}

cancelEdit=(e)=>{

      this.setState({ name: "" });

      this.setState({ nickName: "" });

      this.setState({ mobileNumber: "" });

      this.setState({ address: "" });
   this.expandContact(this.state.index)
}

  render() {

    return (
      <div className="container">
        <h1 className="text-center bg-warning">Contacts Manager</h1>
        <hr />
        <div className="col-md-5">
<SearchBar  contacts={this.props.contacts}/>
          <ul>
            {this.props.contacts.map((contact,i) =>
              this.allcontact(contact,i)
            )}
          </ul>
        </div>

        <div className="col-md-10">
          <Form
            handleAddressChange={this.handleAddressChange}
            handleSubmit={this.handleSubmit}
            handleNameChange={this.handleNameChange}
            handleMobileNumberChange={this.handleMobileNumberChange}
            handleNickNameChange={this.handleNickNameChange}
            display={this.state.display}
            outline={this.state.outline}
            displayForm={this.state.displayForm}
            name={this.state.name}
            nickName={this.state.nickName}
            mobileNumber={this.state.mobileNumber}
            address={this.state.address}
            displayEditBtn={this.state.displayEditBtn}
            displayAddBtn={this.state.displayAddBtn}
            submitEdit={this.submitEdit}
            cancelEdit={this.cancelEdit}
          />
          <hr />
          {
            <ul className="list-group">
              {this.state.targetContact.map((contact,i) =>
                this.listView(contact,this.state.index)
              )}
            </ul>
          }
        </div>

        <button
          className="btn bg-success  col-md-10 m-2"
          style={this.state.displayList}
          onClick={this.toggledisplay}
        >
          Create New Contact
        </button>
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
    createContact: (nickName, name, mobileNumber, address, id) =>
      dispatch(
        contactAction.createContact(nickName, name, mobileNumber, address, id)
      ),

    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
