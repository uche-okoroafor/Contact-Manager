import React,{useState} from 'react';
import contacticont from '../images/contacticont.png'

function AllContacts(props) {

  const backgroundActive = {
    backgroundColor: "#17a2b8",
    marginTop: "15px",
    boxShadow: "0px 0px 5px 5px rgba(184,226,242,1)",
    color: "#ffffff",
  };

  const background = {};
  const imgframe = 'imgframe';
  const disEmptyDiv ='imgframei';
  const thumbnail ="thumbnail";
const [sortDisplay1,setSortDisplay1] = useState( {display:'block'} )
const [sortDisplay2,setSortDisplay2] = useState( {display:'none'} )
const [toggle,setToggle]=useState(true);
const[imgUrl,setImgUrl]=useState(<i className="fas fa-sort-alpha-down"></i>)

const sortContacts=()=>{
if(toggle)
{
setSortDisplay1({display:'none'});
setToggle(!toggle);
setImgUrl(<i className="fas fa-sort-alpha-down-alt"></i>)
return setSortDisplay2({display:'block'});
}

setToggle(!toggle);
setSortDisplay1({display:'block'});
setImgUrl(<i className="fas fa-sort-alpha-down"></i>)
return setSortDisplay2(
{display:'none'}
);
}




const allContacts=()=>{

const list = props.contacts;
list.sort(function (a, b) {
      var nameA = a.firstName.toUpperCase();
      var nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

const mappedList =list.map((contact) => (   
 <li
          key={contact.id}
          style={activeClick(contact.id,props.id)}
          className={'list-group-item clearfix displaylist'}
          onClick={(e) => {props.expandContact(contact.id,e)}}
        >
       <img src={imgSrc(contact)} className={activeThumbnail(contact.id,props.id)} alt="contacticont" /><div className={displayDiv(contact.id,props.id)} ></div> {contact.firstName} {contact.lastName}

        </li>

    ));

 

    return mappedList;




}






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



function imgSrc(contact){
if(contact.pictureT[0] === 'h'){

return contact.pictureT;
}
return contacticont;
}




const allContactsSort=()=>{
const list = props.contacts;
list.sort(function (a, b) {
      var nameA = a.firstName.toUpperCase();
      var nameB = b.firstName.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });



const mappedList =list.map((contact) => (   
 <li
          key={contact.id}
          style={activeClick(contact.id,props.id)}
          className={'list-group-item clearfix displaylist'}
          onClick={(e) => {props.expandContact(contact.id,e)}}
        >
       <img src={imgSrc(contact)} className={activeThumbnail(contact.id,props.id)} alt="contacticont" /><div className={displayDiv(contact.id,props.id)} ></div> {contact.firstName} {contact.lastName}
        </li>
    ));

 

    return mappedList;




}



   return (
      <React.Fragment>

<div className="all-contactheading">
                <div></div><h5 className="text-center pt-3">All Contacts</h5><span onClick={sortContacts} >{imgUrl}</span > 
              </div>
<div style={props.emptyContactDisplay}>contact is empty</div>

<ul style={sortDisplay1}>
{allContacts()}   
 </ul>

<ul  style={sortDisplay2} >
{allContactsSort()}   
 </ul>

      </React.Fragment>
    );
}


export default AllContacts;

