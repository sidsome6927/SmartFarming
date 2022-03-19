import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const [flaskdata,setFlaskData] = useState([]);

  const getFlaskData = async() => {
    const res = await axios.get('/members');
    setFlaskData(res.data.plants);
  }

  useEffect(()=> {
    getFlaskData()
  },[])

  console.log(flaskdata)

  const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Species',
        selector: row => row.species,
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
      data = {flaskdata.map((i)=>{
        return(
          {
            name:i.name,
            species:i.species
          }
        )
        
      })}
      customStyles = {customStyles}
    />
  )
}
