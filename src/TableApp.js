import { useEffect, useState } from "react"

import React from "react";
import { useNavigate } from "react-router-dom";



function TableApp(){
  const[column,setColumn] = useState([])
  const[records,setRecords] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
      fetch("https://api.mfapi.in/mf/100049")
      .then(res => res.json())
      .then(obj =>{
        let result =Object.keys(obj.data[0]).slice(0,10)
        setColumn(result)
        // setRecords(obj.data)
        let res = obj.data.slice(0,10)
        setRecords(res)
      })
  },[])
  return(
     <div>
      <table className="tables">
        <thead>
          <tr>
            {column.map((c,i) => (
              <th key={i}>{c}</th>
         
            ))}
             <th>Chart</th>
          </tr>
         
        </thead>
<tbody>
  {
    records.map((record,i) =>(
      <tr key={i}>
         <td>{record.date}</td>
         <td>{record.nav}</td>
        <td><p onClick={()=> navigate('/chart')}>Click</p></td>
      </tr>
    ))
  }
</tbody>
      </table>
     </div>
  )
}
export default TableApp;