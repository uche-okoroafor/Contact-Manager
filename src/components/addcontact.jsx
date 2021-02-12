import React, { Component } from "react";
import contacticont from "../images/contacticont.png";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }

  render() {
    return (
      <div style={this.props.displayForm} className="addContact">
        <h5>Add Contact</h5>
        <form onSubmit={this.props.handleSubmit}>
          <div className="imgcontainner">
            <img src={contacticont} alt="addimg" />
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              value={this.state.img}
            ></input>
          </div>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-username">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="input-username"
                    className="form-control form-control-alternative"
                    onChange={this.props.handleChange}
                    placeholder="Title"
                    value={this.props.title}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-username">
                    First Name
                  </label>
                  <input
                    id="input-username"
                    className="form-control form-control-alternative"
                    name="firstName"
                    onChange={this.props.handleChange}
                    value={this.props.firstName}
                    style={this.props.outline}
                    placeholder="First name"
                  />
                  <span style={this.props.display}>First name required</span>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-username">
                    last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="input-username"
                    className="form-control form-control-alternative"
                    value={this.props.lastName}
                    placeholder="Last name"
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-username">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="input-username"
                    className="form-control form-control-alternative"
                    value={this.props.phone}
                    style={this.props.outline}
                    placeholder="Phone Number"
                    name="phone"
                    onChange={this.props.handleChange}
                  />
                  <span style={this.props.display}>
                    Phone number required !
                  </span>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-username">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="cell"
                    onChange={this.props.handleChange}
                    id="input-username"
                    className="form-control form-control-alternative"
                    value={this.props.cell}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-last-name">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.props.handleChange}
                    id="input-last-name"
                    className="form-control form-control-alternative"
                    value={this.props.email}
                    placeholder="contact@example.com"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-email">
                    Street Number
                  </label>
                  <input
                    type="number"
                    name="streetNumber"
                    onChange={this.props.handleChange}
                    className="form-control form-control-alternative"
                    value={this.props.streetNumber}
                    placeholder="Street Number"
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label" for="input-first-name">
                    Street Name
                  </label>
                  <input
                    type="text"
                    id="input-first-name"
                    name="streetName"
                    onChange={this.props.handleChange}
                    className="form-control form-control-alternative"
                    value={this.props.streetName}
                    placeholder="Street Name"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-last-name">
                    Postal code
                  </label>
                  <input
                    type="number"
                    name="postcode"
                    onChange={this.props.handleChange}
                    id="input-last-name"
                    className="form-control form-control-alternative"
                    value={this.props.postcode}
                    placeholder="Postal code"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-city">
                    City
                  </label>
                  <input
                    name="city"
                    onChange={this.props.handleChange}
                    id="input-city"
                    className="form-control form-control-alternative"
                    value={this.props.city}
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label" for="input-country">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    onChange={this.props.handleChange}
                    id="input-postal-code"
                    className="form-control form-control-alternative"
                    value={this.props.state}
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" for="input-country">
                    Country
                  </label>
                  <input
                    name="country"
                    onChange={this.props.handleChange}
                    id="input-country"
                    className="form-control form-control-alternative"
                    placeholder="Country"
                    value={this.props.country}
                  />
                </div>
              </div>
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
            </div>
          </div>
          {/* <input
            type="text"
            name="title"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.title}
            placeholder="Title"
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
          <input
            type="text"
            name="lastName"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.lastName}
            placeholder="Last name"
          />
          <input
            type="text"
            name="phone"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.phone}
            style={this.props.outline}
            placeholder="phone"
          />
          <span style={this.props.display}>Phone number required</span>
          <input
            type="text"
            name="cell"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.cell}
            placeholder="cell"
          />
          <input
            type="text"
            name="streetNumber"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.streetNumber}
            placeholder="streetNumber"
          />{" "}
          <input
            type="text"
            name="streetName"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.streetName}
            placeholder="streetName"
          />{" "}
          <input
            type="text"
            name="city"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.city}
            placeholder="city"
          />{" "}
          <input
            type="text"
            name="state"
            onChange={this.props.handleChange}
            className="form-control "
            value={this.props.state}
            placeholder="state"
          />{" "}
          <input
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
            placeholder="contact@example.com"
          />{" "}
          <input
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
          /> */}
        </form>
      </div>
    );
  }
}

export default Form;