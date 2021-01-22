import React from "react";


function AllContacts(props) {

function activeClick(index,id) {
if(index===id){
let background =
{backgroundColor:'rgba(76, 153, 73, 0.918)'}
return background
}
let background = {backgroundColor:''}
 return background
}



    return (
      <React.Fragment>

        <li
          key={props.index}
          style={activeClick(props.index,props.id)}
          className="list-group-item clearfix  displaylist"
          onClick={(e,) => {props.expandContact(props.index,e)}}
        >
       <img src={props.contact.pictureT} alt=""/> {props.contact.firstName} {props.contact.lastName}
        </li>
 
      </React.Fragment>
    );
}


export default AllContacts;
