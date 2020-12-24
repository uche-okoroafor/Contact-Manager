import React  from 'react';
import { connect } from 'react-redux'
import { addPerson } from './action'



class Button extends React.Component {
constructor(props){
super(props);
 this.state = { 
person:''
}
}



handleChange=(e)=>{
this.setState({person:e.target.value});
}

upDatelist=(e)=>{
if(this.state.person!==""){
this.props.addPerson(this.state.person);
this.setState({person:""});
}
e.preventDefault();

}







   
    render() { 

        return (
<React.Fragment>
<form onSubmit={this.upDatelist}>
<input type='text' className='m-3' value={this.state.person} onChange={this.handleChange}  placeholder="Add contact Name"/>
<input type="number"   className/>
<button   className="btn btn-primary m-2 " type="submit">Add</button>

</form>

</React.Fragment>
  );
    }
}

const mapDipatchToProps={
addPerson
}



export default connect(null,mapDipatchToProps)(Button) ;