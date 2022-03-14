import {useState} from 'react';
import firedb from './firebase';
import { getDatabase, ref, set,get,child } from "firebase/database";
  
const App =() => {
  const [name , setName] = useState();
  const [age , setAge] = useState();
  const [searchid, setSearchId] = useState();
  const [id, setId] = useState();
      
  const Push = () => {
    set(ref(firedb, 'users/' + id), {
      name: name,
      age: age,
      id:id
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
      <input placeholder="Age" value={age} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/>
      <input placeholder="ID" value={id} 
      onChange={(e) => setId(e.target.value)}/>
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
  
export default App;