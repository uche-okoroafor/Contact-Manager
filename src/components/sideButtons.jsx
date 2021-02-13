import React,{useState}  from "react";

function SideButtons(props) {

const[selectState,setSelectState]=useState("Select All Contacts");
const [ischecked,setIschecked]=useState(false);



const handleSelectState=()=>{
if( ischecked === true)
{ setSelectState("Select All Contacts") ;
return setIschecked(!ischecked)

}
 setSelectState("Unselect All Contacts") 
return setIschecked(!ischecked);

}



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
        onClick={() =>{ props.toggleDisplay("displayDeleteContacts");
}                
}
       style={props.displayDeleteBtn1}
      >
       Delete Contacts
      </button>


 <button
        className="btn bg-danger  m-2 sidebutton"
        onClick={() =>{props.createArrayTrue();
handleSelectState();
        }}
       style={props.displayDeleteBtn2}
      >
     {selectState}
      </button>

 <button
        className="btn bg-danger  m-2 sidebutton"
     onClick={(e) =>{props.handleDeleteSelectedContact(e)
        }}
       style={props.displayDeleteBtn2}
      >
       Delete Selected Contacts
      </button>


    </React.Fragment>
  );
}

export default SideButtons;
