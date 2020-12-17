import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Counter(props){
const [arr,setarr] = useState("");
const [outside,setoutside]=useState('');
const [load,setload]=useState(props.data);


function updatec(e){
setarr(e.target.value);
}



function loadcontact(e){
setload([...load,arr]);
setoutside(props.data.map((list,index)=><li key={index}>{list}</li>))
setarr('');
e.preventDefault();
}


return <div><form onSubmit={loadcontact}>
<input type="text" value={arr} onChange={updatec}/>
<input type="submit" value="Submit"/>
<p>{outside}{load}</p>
</form>
</div>
}


const arr = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render( <Counter data={arr}/> 
,document.getElementById("root")
)
