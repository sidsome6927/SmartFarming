import { useState,useEffect } from "react";
import axios from "axios";

const TestFlask = ()=> {
    const reptiles = ["alligator", "snake", "lizard"];
    const [dataflask,setDataFlask] = useState('');
    useEffect(async ()=>{
    const res = await axios.get('/members')
    setDataFlask(res.data.plants)
    
    },[])
    console.log(dataflask)
    dataflask.map((i) => {
        console.log(i.name)
        console.log(i.species)
    })
    return (
        <h1>TEST</h1>
        
    )
        
    
}

export default TestFlask;