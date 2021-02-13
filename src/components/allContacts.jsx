import React from 'react';
import contacticont from '../images/contacticont.png'

function AllContacts(props) {

  const backgroundActive = {
    backgroundColor: "rgba(76, 153, 73, 0.918)",
    marginTop: "15px",
    boxShadow: "0px 0px 5px 5px rgba(184,226,242,1)",
    color: "#ffffff",
  };

  const background = {};
  const imgframe = 'imgframe';
  const disEmptyDiv ='imgframei';
  const thumbnail ="thumbnail";




function activeClick(index,id) {
if(index===id){
return backgroundActive
}
 return background
}

function activeThumbnail(index,id)
{
if(index===id){
return 'activethumbnail'
}
 return thumbnail
}



function displayDiv(index,id)
{
if(index===id){

return disEmptyDiv
}

 return imgframe;

}
// 


function imgSrc(){
if(props.contact.pictureT[0] === 'h'){

return props.contact.pictureT;
}
return contacticont;
}








   return (
      <React.Fragment>

        <li
          key={props.index}
          style={activeClick(props.index,props.id)}
          className={'list-group-item clearfix displaylist'}
          onClick={(e) => {props.expandContact(props.index,e)}}
        >
       <img src={imgSrc()} className={activeThumbnail(props.index,props.id)} alt="contacticont" /><div className={displayDiv(props.index,props.id)} ></div> {props.contact.firstName} {props.contact.lastName}
        </li>
 
      </React.Fragment>
    );
}


export default AllContacts;

