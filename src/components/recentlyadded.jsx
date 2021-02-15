import React,{useState} from "react";
import contacticont from "../images/contacticont.png";



function RecentlyAdded(props) {



  const backgroundActive = {
    backgroundColor: "rgba(76, 153, 73, 0.918)",
    marginTop: "15px",
    boxShadow: "0px 0px 5px 5px rgba(184,226,242,1)",
    color: "#ffffff",
  };

  const background = {};
  const imgframe = 'recentdiv';
  const disEmptyDiv ='recentdivi';
  const thumbnail ="thumbnail";
const [sortDisplay1,setSortDisplay1] = useState( {display:'block'} )
const [sortDisplay2,setSortDisplay2] = useState( {display:'none'} )
const [toggle,setToggle]=useState(true);
const[imgUrl,setImgUrl]=useState("https://image.flaticon.com/icons/png/512/31/31283.png")




const sortContacts=()=>{
if(toggle)
{
setSortDisplay1({display:'none'});
setToggle(!toggle);
setImgUrl("https://image.flaticon.com/icons/png/512/31/31232.png")
return setSortDisplay2({display:'block'});
}

setToggle(!toggle);
setSortDisplay1({display:'block'});
setImgUrl("https://image.flaticon.com/icons/png/512/31/31283.png")
return setSortDisplay2(
{display:'none'}
);
}




  function recentContact() {
    const list = props.contacts.map((contact) => (
      <li
        key={contact.id}
        style={activeClick(contact.id, props.id)}
        className={"list-group-item clearfix displaylist"}
        onClick={(e) => {
          props.expandContact(contact.id, e);
        }}
      >
        <img
          src={imgSrc(contact)}
          className={activeThumbnail(contact.id, props.id)}
          alt="contacticont"
        />
        <div className={displayDiv(contact.id, props.id)} ></div>{" "}
        {contact.firstName} {contact.lastName}
      </li>
    ));
    return list;
  }




  function recentContact2() {
    const list = props.contacts.map((contact, index) => (
      <li
        key={index}
        style={activeClick(index, props.id)}
        className={"list-group-item clearfix displaylist"}
        onClick={(e) => {
          props.expandContact(index, e);
        }}
      >
        <img
          src={imgSrc(contact)}
          className={activeThumbnail(index, props.id)}
          alt="contacticont"
        />
        <div className={displayDiv(index, props.id)} ></div>{" "}
        {contact.firstName} {contact.lastName}
      </li>
    ));
    return list.reverse();
  }

  function activeClick(index, id) {
    if (index === id) {
      return backgroundActive;
    }
    return background;
  }

  function activeThumbnail(index, id) {
    if (index === id) {
      return "activethumbnail";
    }
    return thumbnail;
  }

  function displayDiv(index, id) {
    if (index === id) {
      return disEmptyDiv;
    }

    return imgframe;
  }

  function imgSrc(contact) {
    if (contact.pictureT[0] === "h") {
      return contact.pictureT;
    }
    return contacticont;
  }

  return (
    <React.Fragment>
  <div className="recent-contact-heading">
            <div></div>    <h5 className="text-center p-2">Recently Added Contacts</h5>
<img src={imgUrl}  onClick={sortContacts}   alt='sorticon'  />
              </div>
      <div className="recentlyadded">
        <ul style={sortDisplay1}>{recentContact()}</ul>
 <ul style={sortDisplay2}>{recentContact2()}</ul>
      </div>
    </React.Fragment>
  );
}

export default RecentlyAdded;
