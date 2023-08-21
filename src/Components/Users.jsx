import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Users=()=> {
  let [state,setState] =useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((response)=>{
      console.log(response.data);
      setState(response.data)
    })
  },[])
  // console.log(data)

  let deleteData=(a)=>{
    axios.delete(`http://localhost:3000/content/${a}`)
    window.location.assign("/user")

  }
  return (
    <div id={style.profile}>
    {state.map((x)=>{
        return(
          <div id={style.box}>
          <table>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Employee ID</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Company</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{x.id}</td>
      <td>{x.id}</td>
      <td>{x.name}</td>
      <td>{x.salary}</td>
      <td>{x.company}</td>
      <td>
        <button>
          <Link to={`/edit/${x.id}`}>Edit</Link>
        </button>
        <button onClick={() => {deleteData(x.id)}}>Delete</button>
      </td>
    </tr>
  </tbody>
</table>

        </div>

          
        )
      })}
    </div>
  )
}

export default Users

//npx json-server --watch Backend/db.json
//npx json-server Backend/db.json --watch port 8000