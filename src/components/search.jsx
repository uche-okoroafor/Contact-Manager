import React, { Component } from "react";
import { connect } from "react-redux";
import contacticont from '../images/contacticont.png'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: this.searchImport(),
      filteredSearch: [],
    };
  }


searchImport=()=>this.props.searchInput;




  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
    this.setState({
      filteredSearch:[...this.props.contacts].sort(function (a, b) {
      var nameA = a.firstName.toUpperCase();
      var nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }).filter((contact) => {
        return (
          contact.firstName
            .toLowerCase()
            .indexOf(this.state.searchInput.toLowerCase()) !== -1
        );
      }),
    });
    this.props.toggleDisplay("searchdisplay");
    e.preventDefault();
  
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
            this.props.toggleDisplay("displayContactDetails");
          }}
        >
         <img src={this.imgSrc(data.pictureT)}  className="thumbnail" alt="icon"/><div className='imgframe'></div> {data.firstName} {data.lastName}
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
