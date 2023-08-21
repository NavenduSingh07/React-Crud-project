import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const HomeCrud=()=> {
  return (
    <section id={style.nav}>


        <Link to="/create">Create-Users</Link>
        <Link to="/user">Users</Link>
    </section>
   
  )
}

export default HomeCrud