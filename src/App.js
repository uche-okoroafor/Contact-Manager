import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';
import Form from './components/form';







class App extends Component {

  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
   this.handleNickNameChange = this.handleNickNameChange.bind(this);
    this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
     name: '',
      nickName:'',
      mobileNumber:'',
      address:'',
      display:{color:'red',display:'none'},
      outline:{},
      listStyle:{hover:{background:'green'}},


 displayList:{color:'red',display:'none'},

  }
  }
 handleNameChange(e){
    this.setState({
      name: e.target.value
    })
 }


 handleNickNameChange(e){
    this.setState({
      nickName: e.target.value
    })
  }

 handleMobileNumberChange(e){
    this.setState({
      mobileNumber: e.target.value
    })
  }

 handleAddressChange(e){
    this.setState({
      address: e.target.value
    })
  }

  handleSubmit(e){
if(this.state.name !== ''&& this.state.mobileNumber !== ''){

    e.preventDefault();
let name = { name: this.state.name }

let nickName = {nickName: this.state.nickName}

let mobileNumber = { mobileNumber: this.state.mobileNumber}

let address = {address: this.state.address}
this.props.createContact(name,nickName,mobileNumber,address);

this.setState({name:''});

this.setState({ nickName:''});
     
this.setState({ mobileNumber: '' });

this.setState({ address:'' });


this.setState({display:{color:'red',display:'none', fontSize:'14px'}});
this.setState({outline:{}});

  }
else{
this.setState({display:{color:'red',display:'inline', fontSize:'14px'}});
this.setState({outline:{border:'1px solid red'}});

e.preventDefault();

}

  }

  listView(data, index){
    return (
      <div className="row" style={this.state.displayList}>
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
     
        </div>
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.nickName}
          </li>
        </div>
  <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.mobileNumber}
          </li>
        </div>
  <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.address}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }


 expandContact=(i)=>{
this.setState({displayList:{display:'block'}})


}

allcontact(data, index){
return  <div className="col-md-10">
          <li key={index} className="list-group-item clearfix" style={this.state.listStyle} onClick={()=>this.expandContact(index)}>
            {data.name}
          </li>
        </div>
}


  render() {

    return(
      <div className="container">
        <h1 className="text-center bg-warning">Contacts Manager</h1>
        <hr />
<div className="col-md-2">

<ul>
{this.props.contacts.map((contact, i) => this.allcontact(contact, i))}

</ul>

</div>

        <div className="col-md-10">
          <h3>Add Contact Form</h3>
        <Form  handleAddressChange={this.handleAddressChange}  handleSubmit={this.handleSubmit} handleNameChange={this.handleNameChange} handleMobileNumberChange={this.handleMobileNumberChange} handleNickNameChange={this.handleNickNameChange}  
         display={this.state.display} outline={this.state.outline}
       name={this.state.name} nickName={this.state.nickName} mobileNumber={this.state.mobileNumber} address={this.state.address}

                 />
          <hr />
        { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (nickName,name,mobileNumber,address) => dispatch(contactAction.createContact(nickName,name,mobileNumber,address)),
 
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
