import React from 'react';



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
this.props.data(this.state.person);
this.setState({person:""});
}
e.preventDefault();

}







   
    render() { 

        return (
<React.Fragment>
<form onSubmit={this.upDatelist}>
<input type='text' className='m-5' value={this.state.person} onChange={this.handleChange}  placeholder="Add new contact"/>
<button   className="btn btn-primary m-2 " type="submit">Submit</button>

</form>

</React.Fragment>
  );
    }
}
 
export default Button;