import { useState } from 'react';
import firedb from './firebase';
import { getDatabase, ref, set,get,child } from "firebase/database";
  
const Datapush =() => {
    const[name,setName]= useState('');
    const[password,setPassword] = useState('');
    const[searchid,setSearchId] = useState('');
    const statusdate =new Date().toLocaleDateString();
    const statustime = new Date().toLocaleTimeString();
      
  const Push = () => {
    set(ref(firedb, 'userstatus/'+name), {
      name: name,
      statustime:statustime,
      statusdate:statusdate,
      status:'Off'
    }).then(()=>{alert('Data has been inserted')});
  }
  const Search = () => {
    const dbRef = ref(firedb);
    get(child(dbRef, `users/${searchid}/name`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  
  return (
    <div className="App" style={{marginTop : 250}}>
      <center>
      <input placeholder="Name" value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <button onClick={Push}>PUSH</button>
      <br/><br/>
      <input placeholder="SearchId" value={searchid} 
      onChange={(e) => setSearchId(e.target.value)}/>
      <br/><br/>
      <button onClick={Search}>SEARCH</button>
      </center>
    </div>
  );
}
  
export default Datapush;