import React, {useState} from 'react';
import logo from '../images/logo192.png'
import uchepic from '../images/uchepic.jpg'

function AllContacts(props) {

const[backgroundActive,setBackgroundActive] = useState({backgroundColor:'rgba(76, 153, 73, 0.918)'});
const[background,setBackground] = useState();
const [displayDiv,setDisplayDiv] =useState({display:'none'});
const[thumbnail,setThumbnail] = useState({
backgroundColor: 'sienna',
width: '50px',
height:'50px',
borderRadius:'10px',
display: 'inline-block',
marginRight:'10%',
transition:'1s',
});






function activeClick(index,id) {
if(index===id){
return backgroundActive
}
 return background
}


function handleMouseOver(){
setDisplayDiv({display:'block'});
setThumbnail(
{
backgroundColor: 'sienna',
width: '50px',
height:'50px',
borderRadius:'10px',
display: 'inline-block',
marginRight:'10%',
position: 'absolute',
top:'-10px',
left:'-10px',
borderTop:'2px solid #50c1ee ',
borderLeft:'2px solid #50c1ee',
});




}

function handleMouseLeave(){
setDisplayDiv({display:'none'})
setThumbnail(
{
backgroundColor: 'sienna',
width: '50px',
height:'50px',
borderRadius:'10px',
display: 'inline-block',
marginRight:'10%',
});


}




function imgSrc(){
if(props.contact.pictureT[0] === 'h'){

return props.contact.pictureT;
}
return uchepic;
}


    return (
      <React.Fragment>

        <li
          key={props.index}
          style={activeClick(props.index,props.id)}
          className="list-group-item clearfix  displaylist"
          onClick={(e,) => {props.expandContact(props.index,e)}}
          onMouseOver={handleMouseOver}
           onMouseLeave={handleMouseLeave}
        >
       <img src={imgSrc()} alt=""   style={thumbnail}/><div style={displayDiv}></div> {props.contact.firstName} {props.contact.lastName}
        </li>
 
      </React.Fragment>
    );
}


export default AllContacts;
