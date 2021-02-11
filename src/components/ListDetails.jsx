import React from 'react';




class ListDetails extends React.Component {
   constructor(props){
super(props);
this.state={
index:0,
details:[]
}
}

handleDetails=(persons,nickname,numbers,address)=>{
for(let i = 0;i < this.props.persons.length;i++){
this.setState({details:[...this.state.details,persons[i],nickname[i],numbers[i],address[i]]});

}
}



    render() { 


this.handleDetails(this.props.persons,this.props.nickName,this.props.numbers,this.props.address);
       const details =this.state.details.map((list,index)=><li key={index}> {list}  </li>)

 return ( 

<ul>{details}</ul>

 );
    }
}
 
export default ListDetails;
