import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={this.props.displayForm}>
        <h5>Add Contact</h5>
        <form onSubmit={this.props.handleSubmit}>
            <input
            type="text"
            name="title"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.title}
            placeholder="NickName"
          />
          <input
            type="text"
            name="firstName"
            onChange={this.props.handleChange}
            className="form-control"
            value={this.props.firstName}
            style={this.props.outline}
            placeholder="Name"
          />
          <span style={this.props.display}>Name required</span>
          <br />

  <input
            type="text"
            name="lastName"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.lastName}
            placeholder='lastName'
          />  <input
            type="text"
            name="streetNumber"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.streetNumber}
            placeholder="streetNumber"
          />  <input
            type="text"
            name="streetName"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.streetName}
            placeholder="streetName"
          />  <input
            type="text"
            name="city"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.city}
            placeholder="city"
          />  <input
            type="text"
            name="state"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.state}
            placeholder="state"
          />  <input
            type="text"
            name="country"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.country}
            placeholder="country"
          /> 
<input
            type="text"
            name="postcode"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.postcode}
            placeholder="postcode"
          /> 
 <input
            type="text"
            name="email"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.email}
            placeholder="email"
          />  <input
            type="text"
            name="phone"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.phone}
            style={this.props.outline}
            placeholder="phone"
          /> 
  <span style={this.props.display}>Phone number required</span>
          <br />

 <input
            type="text"
            name="cell"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.cell}
            placeholder="cell"
          />  <input
            type="text"
            name="pictureL"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.pictureL}
            placeholder="pictureL"
          />
          <input
            type="text"
            name="pictureM"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.pictureM}
            placeholder="pictureM"
          />
          <br />
        


          <input
            type="submit"
            className="form-control btn-success "
            value="Add Contact"
            style={this.props.displayAddBtn}
          />
          <input
            type="button"
            className="form-control btn-success m-2 "
            style={this.props.displayEditBtn}
            value="Save Contact"
            onClick={(e) => this.props.submitEdit(e)}
          />
          <input
            type="button"
            className="form-control btn-warning m-2 "
            style={this.props.displayEditBtn}
            value="Cancel Edit"
            onClick={(e) => this.props.cancelEdit(e)}
          />
        </form>
      </div>
    );
  }
}

export default Form;
