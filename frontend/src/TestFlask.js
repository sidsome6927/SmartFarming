import { useState,useEffect } from "react";
import axios from "axios";

const TestFlask = ()=> {
    const reptiles = ["alligator", "snake", "lizard"];
    const [dataflask,setDataFlask] = useState('');
    useEffect(async ()=>{
    const res = await axios.get('/members')
    setDataFlask(res.data)
    
    },[])
    console.log(dataflask)
    return (
        <h1>testfask</h1>
    )
}

export default TestFlask;