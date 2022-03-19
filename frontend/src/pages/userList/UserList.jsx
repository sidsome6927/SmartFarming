import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import DataTable,{ createTheme } from 'react-data-table-component'
import { getDatabase, ref, set,get,child } from "firebase/database";
import firedb from "../../firebase";

export default function UserList() {
  const [data, setData] = useState({});

  const StatusStable = () => {
    const dbRef = ref(firedb);
    get(child(dbRef, `users`)).then((snapshot) => { 
      if (snapshot.exists()) {
        setData({...snapshot.val()})
         
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

  const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Id',
        selector: row => row.id,
    },
    {
      name: 'Password',
      selector: row => row.password,
  }
];
const customStyles = {
  rows: {
      style: {
          minHeight: '72px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '15px',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '15px',
      },
  },
};


 return (
   <DataTable
     columns={columns}
     data= {Object.keys(data).map((i)=> {
       return(
         {
           name:data[i].name,
           id:data[i].id,
           password:data[i].password
         } 
       )
     })}
    customStyles = {customStyles}
    />
 )
}
