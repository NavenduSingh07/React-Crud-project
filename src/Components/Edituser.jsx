import React from "react"
import style from "./home.module.css"
import { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios, { Axios } from "axios"
import { useEffect } from "react"


const Edituser = () => {
    let [name,setName] =useState("")
    let [salary,setSalary] =useState("")
    let [company,setCompany] =useState("")
    
    let {index} =useParams();
    let Navigate=useNavigate()
    //console.log(index);

    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)//content
        .then((response)=>{
            console.log(response.data);
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
    },[])

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle =(e)=>{
        e.preventDefault()
        let payLoad={name,salary,company}
        axios.put(`http://localhost:3000/content/${index}`,payLoad)
        .then(()=>{
            console.log("Data has been addead");

        })
        Navigate("/user")

    }
    return(
        <div>
        <form action="">
            <table id={style.Myform}>
                <h2 className={style.head}>Create New User</h2><br />
                
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td><input type="text"  value={name} onChange={nameData} /></td>
                </tr>
                <br />
                <tr>
                    <td><label htmlFor="">Salary</label></td>
                    <td><input type="text"  value={salary} onChange={salaryData}/></td>
                </tr>
                <br />
                <tr>
                    <td><label htmlFor="">Company</label></td>
                    <td><input type="text"  value={company} onChange={companyData}/></td>
                </tr>
                <br />
                <tr id={style.btn}>
                    <td colSpan='2'onClick={formHandle}><button >Submit</button></td>
                </tr>
            </table>
        </form>
    </div>
    )
}

export default Edituser

//
//
// 
//