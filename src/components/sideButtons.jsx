import React  from "react";

function SideButtons(props) {






  return (
    <React.Fragment>
      <button 
        className="btn bg-success  m-2 sidebutton"
        onClick={() => props.toggleDisplay("displayCreateNewContact")}
      >
        Create New Contact
      </button>


 <button
        className="btn btn-info  m-2 sidebutton"
        onClick={() => props.toggleDisplay("displayAll4edit")}
      >
     Edit Contacts
      </button>


 <button
        className="btn bg-danger  m-2 sidebutton"
        onClick={() =>{ props.toggleDisplay("displayDeleteContacts")
}                
}
       style={props.displayDeleteBtn1}
      >
       Delete Contacts
      </button>


 <button
        className="btn bg-danger  m-2 sidebutton"
        onClick={() =>{props.createArrayTrue();
        }}
       style={props.displayDeleteBtn2}
      >
      Select All Contacts
      </button>

 <button
        className="btn bg-danger  m-2 sidebutton"
     onClick={() =>{props.createArrayTrue();
        }}
       style={props.displayDeleteBtn2}
      >
       Delete Selected Contacts
      </button>


    </React.Fragment>
  );
}

export default SideButtons;
