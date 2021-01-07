import React, { Component } from "react";
import {connect} from 'react-redux';




class SearchBar extends Component {
   constructor(props){
super(props);
this.state={
searchInput:'',
}
}



handleChange=(e)=>{
this.setState({  searchInput:e.target.value   })
}



    render() { 



 return ( 

<div>
<input type="text" value={this.state.searchInput} onChange={this.handleChange} placeholder='SearchContacts...'   className="form-control m-5"/>
</div>
 );
    }
}



const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};



 
export default  connect(mapStateToProps)(SearchBar);
