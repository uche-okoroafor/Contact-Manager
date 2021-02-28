import React,{useState,useEffect}  from "react";
import { useMediaQuery } from 'react-responsive'

function SideButtons(props) {




const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
const isTabletOrMobile = useMediaQuery({ query: '(min-width: 992px)' })
const[selectState,setSelectState]=useState("Select All Contacts");
const [ischecked,setIschecked]=useState(false);
const [displayBtn,setDisplayBtn]=useState({display:'none'});

// const displayBtn= resizeWindow? {display:'none'}:{display:'block'};

const handleWindowResize =()=>{
// resizeWindow?setDisplayBtn({display:'block'}):setDisplayBtn({display:'none'})



if(isTabletOrMobile) { 
// setDisplayBtn({display:'block'});

return  {display:'none'}
}

//  setDisplayBtn({display:'none'})

return {display:'block'};

}


// useEffect(
// ()=>handleWindowResize(),
// [window.innerWidth < 480]);

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


{isTablet && <button style={handleWindowResize()}
        className="btn btn-info  m-2 sidebutton"
        onClick={() => props.toggleDisplay("displayAllContacts")}
      >
     All Contacts
      </button>}

 <button
        className="btn btn-info  m-2 sidebutton"
        onClick={() => props.toggleDisplay("displayAll4edit")}
      >
     Edit Contacts
      </button>



 <button style={handleWindowResize()}
        className="btn btn-info  m-2 sidebutton"
        onClick={() => props.toggleDisplay("displayMobileRecentContact")}
      >
     Recent Contacts
      </button>



 <button
        className="btn bg-danger  m-2 sidebutton"
        onClick={(e) =>{ props.toggleDisplay("displayDeleteContacts");
props.createArray(e)
}                
}
       style={props.displayDeleteBtn1}
      >
       Delete Contacts
      </button>


 <button
        className="btn bg-danger  m-2 sidebutton"
        onClick={() =>{props.toggleCheckbox();
handleSelectState();
        }}
       style={props.displayDeleteBtn2}
      >
     {selectState}
<input className="checkbox ml-1" type="checkbox"  checked={ischecked}/>
      </button>

 <button
        className="btn bg-danger  m-2 sidebutton"
     onClick={(e) =>{props.handleDeleteSelectedContact(e);
     props.handleDeleteSelectedCheckbox(e)   }}
       style={props.displayDeleteBtn2}
      >
       Delete Selected Contacts
      </button>


    </React.Fragment>
  );
}

export default SideButtons;
