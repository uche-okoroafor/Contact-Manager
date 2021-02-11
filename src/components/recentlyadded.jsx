import React, { useState } from 'react'
import contacticont from '../images/contacticont.png'



function RecentlyAdded(props){


const[backgroundActive,setBackgroundActive] = useState({
backgroundColor:'rgba(76, 153, 73, 0.918)',marginTop:'15px',boxShadow:'0px 0px 5px 5px rgba(184,226,242,1)',color:'#ffffff'});

const background = {};
const [imgframe,setImgFrame] =useState({display:'none'});
const [thumbnail,setThumbnail]=useState('thumbnail')
const disEmptyDiv = {display:'block',background:'red'};




function activeClick(index,id) {
if(index === id){
return backgroundActive
}
 return background
}

function activeThumbnail(index,id)
{
if(index=== id){
return 'activethumbnail'
}
 return thumbnail
}



function displayDiv(index,id)
{
if(index===id){

return disEmptyDiv
}

 return imgframe

}



function imgSrc(){
if(props.contact.pictureT[0] === 'h'){

return props.contact.pictureT;
}
return contacticont;
}

function handleMouseOver(){
setThumbnail('activethumbnail');
 setImgFrame({display:'block',});
 console.log(imgframe)
}



function handleMouseLeave(){
setImgFrame({display:'none'})
setThumbnail('thumbnail');
 console.log(imgframe)
}






   return (
      <React.Fragment>

        <li
          key={props.index}
          style={activeClick(props.index,props.id)}
          className={'list-group-item clearfix displaylist'}
          onClick={(e) => {props.expandContact(props.index,e)}}
           onMouseOver={handleMouseOver}
           onMouseLeave={handleMouseLeave}
        >
       <img src={imgSrc()} className={activeThumbnail(props.index,props.id)} alt="contacticont" /><div style={displayDiv(props.index,props.id)}></div> {props.contact.firstName} {props.contact.lastName}
        </li>
 
      </React.Fragment>
    );
}



export default RecentlyAdded;
