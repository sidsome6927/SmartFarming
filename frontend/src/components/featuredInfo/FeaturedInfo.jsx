import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import firedb from "../../firebase";
import { getDatabase, ref, set,get,child } from "firebase/database";

export default function FeaturedInfo() {
  const [temperature,setTemperature] = useState('');
  const [pumpstatus,setPumpStatus] = useState('');

  useEffect(()=> {
    const dbRef = ref(firedb);
    get(child(dbRef,'dummydata/pumpstatus')).then((snapshot) => {
      if (snapshot.exists()) {
        setPumpStatus(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    get(child(dbRef,'dummydata/temperature')).then((snapshot) => {
      if (snapshot.exists()) {
        setTemperature(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[temperature,pumpstatus])
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Temperature</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{temperature}°C</span>
          <span className="featuredMoneyRate">
          </span>
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Pump Status</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{pumpstatus}</span>
          <span className="featuredMoneyRate">
          {pumpstatus==='On'? <ArrowUpward className="featuredIcon"/> :<ArrowDownward  className="featuredIcon negative"/> }
          </span>
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        
      </div>

    </div>
    
  );
}
