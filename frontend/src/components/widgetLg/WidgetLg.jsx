import "./widgetLg.css";
import firedb from "../../firebase";
import { useEffect, useState } from "react";
import { getDatabase, ref, set,get,child } from "firebase/database";
import { CallMerge } from "@material-ui/icons";
let temp;

export default function WidgetLg() {
  const [username,setusername] = useState('');
  const [userstatus,setuserstatus] = useState('');
  const [usertime,setusertime] = useState('');
  const [userdate,setuserdate] = useState('');
  const [statusData, setStatusData] = useState({});

  const StatusStable = () => {
    const dbRef = ref(firedb);
    get(child(dbRef, `userstatus`)).then((snapshot) => { 
      if (snapshot.exists()) {
        setStatusData({...snapshot.val()})
         
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  useEffect(()=>{
    StatusStable()
  },[])

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Last Activity</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">User</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Time</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {Object.keys(statusData).map((i,index) => {
          return (
            <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="/logo192.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{statusData[i].name}</span>
          </td>
          <td className="widgetLgDate">{statusData[i].statusdate}</td>
          <td className="widgetLgAmount">{statusData[i].statustime}</td>
          <td className="widgetLgStatus">
            {statusData[i].status==='On' ? <Button type="On" /> : <Button type="Off" />} 
          </td>
        </tr>
          )
        })}
        
        
        
      </table>
    </div>
  );
}
