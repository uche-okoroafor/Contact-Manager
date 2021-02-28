import React, { Component } from "react";
import { connect } from "react-redux";
import contacticont from '../images/contacticont.png'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      filteredSearch: [],

    };
  }





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
setTimeout(()=>this.props.searchList(this.state.filteredSearch),10)

  
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
         <img src={this.imgSrc(data.pictureT)}  className="thumbnail" alt="icon"/><div className='searchimgframe'></div> {data.firstName} {data.lastName}
        </li>
      </div>
    );
  }

  render() {

    return (
<React.Fragment>
        <input
          type="text"
          value={this.state.searchInput}
          onChange={this.handleChange}
          placeholder={"Search Contacts" }
          className="form-control"
        />

  <ul className="mx-auto searchlist desktop-searchbar ">
          {this.state.filteredSearch.map((contact) =>
            this.searchReturn(contact, contact.id)
          )
  }  </ul>
</React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, null)(SearchBar);
