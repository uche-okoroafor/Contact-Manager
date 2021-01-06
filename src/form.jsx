import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={this.props.displayForm}>
        <h3>Add Contact Form</h3>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            onChange={this.props.handleNameChange}
            className="form-control"
            value={this.props.name}
            style={this.props.outline}
            placeholder="Name"
          />
          <span style={this.props.display}>Name required</span>
          <br />

          <input
            type="text"
            onChange={this.props.handleNickNameChange}
            className="form-control "
            value={this.props.nickName}
            placeholder="NickName"
          />
          <br />
          <input
            type="text"
            onChange={this.props.handleMobileNumberChange}
            className="form-control"
            value={this.props.mobileNumber}
            style={this.props.outline}
            placeholder="Mobilenumber"
          />
          <span style={this.props.display}>Mobilenumber required</span>
          <br />
          <input
            type="text"
            onChange={this.props.handleAddressChange}
            className="form-control"
            value={this.props.address}
            placeholder="Address"
          />
          <br />
          <input type="submit" className="btn btn-success  col-md-10 m-2 " value="Add Contact"  style={this.props.displayAddBtn} />
           <input type="button" className="btn btn-success  col-md-10 m-2 " style={this.props.displayEditBtn} value="Save Contact" onClick={(e)=>this.props.submitEdit(e)} />
             <input type="button" className="btn btn-warning col-md-10 m-2 " style={this.props.displayEditBtn} value="Cancel Edit" onClick={(e)=>this.props.cancelEdit(e)} />
        </form>
      </div>
    );
  }
}

export default Form;
