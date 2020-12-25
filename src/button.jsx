import React  from 'react';
import { connect } from 'react-redux'
import { addPerson } from './index'



class Button extends React.Component {
constructor(props){
super(props);
 this.state = { 
persons:'',
numbers:'',
address:''
}
}

handleNameChange=(e)=>{
this.setState({persons:e.target.value});
}

handleNumberChange=(e)=>{

this.setState({numbers:e.target.value});
}

handleAddressChange=(e)=>{
this.setState({address:e.target.value});
}



upDatelist=(e)=>{
if(this.state.persons!==""&&this.state.numbers!==''){
this.props.addPerson(this.state.persons,this.state.numbers,this.state.address);
this.setState({persons:""});
this.setState({numbers:""});
this.setState({address:""});
}
e.preventDefault();

}







   
    render() { 

console.log(this.state.persons);

        return (
<React.Fragment>
<form onSubmit={this.upDatelist}>
<input type='text' className='m-3' value={this.state.persons} onChange={this.handleNameChange}  placeholder="Add contact Name"/>
<input type="number"   className='m-2' value={this.state.numbers} onChange={this.handleNumberChange}  placeholder="Add contact Number"/>
<input type="text"   className='m-2' value={this.state.address} onChange={this.handleAddressChange}  placeholder="Add contact Address"/>

<button   className="btn btn-primary m-2 "  type="submit">Add</button>

</form>

</React.Fragment>
  );
    }
}

const mapDipatchToProps={
addPerson
}



export default connect(null,mapDipatchToProps)(Button) ;

