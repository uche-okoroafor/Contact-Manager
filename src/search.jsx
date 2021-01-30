import React, { Component } from "react";
import { connect } from "react-redux";
import contacticont from '../images/contacticont.png'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      filteredSearch: [],
    };
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
    this.setState({
      filteredSearch: this.props.contacts.filter((contact) => {
        return (
          contact.firstName
            .toLowerCase()
            .indexOf(this.state.searchInput.toLowerCase()) !== -1
        );
      }),
    });
    this.props.toggleDisplay("searchdisplay");
    e.preventDefault();
    console.log(this.props.contacts);
  };

imgSrc=(data)=>{
if(data[0] === 'h'){

return data;
}
return contacticont;
}


  searchReturn(data, index) {
    return (
      <div className="search-result-list" style={this.props.displaySearchReturn}>
        <li
          key={index}
          className="list-group-item clearfix  displaylist"
          onClick={(e) => {
            this.setState({searchInput:''});
            this.props.expandContact(index, e);
            this.props.toggleDisplay("displayList");
          }}
        >
         <img src={this.imgSrc(data.pictureT)} className="thumbnail" alt="icon"/> {data.firstName} {data.lastName}
        </li>
      </div>
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchInput}
          onChange={this.handleChange}
          placeholder="SearchContacts..."
          className="form-control"
        />
        <ul className="mx-auto searchlist">
          {this.state.filteredSearch.map((contact, i) =>
            this.searchReturn(contact, i)
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, null)(SearchBar);
