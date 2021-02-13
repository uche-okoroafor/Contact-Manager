import React from "react";
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




  function recentContact() {
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
      <div className="recentlyadded">
        <ul>{recentContact()}</ul>
      </div>
    </React.Fragment>
  );
}

export default RecentlyAdded;
