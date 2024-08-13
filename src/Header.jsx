import React, { useContext, useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import './App.css'
import { UserContext } from './UserContext'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Header = () => {
  const {setUserInfo,userInfo}=useContext(UserContext)
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include'
    }).then(response=>{
      response.json().then(userInfo=>{
        setUserInfo(userInfo)
        
      })
    })
  },[])

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST'
    }).then(response=>{
      response.json(toast.success("Logged out successfully!"))
    })
    setUserInfo(null)
  }

  const username=userInfo?.username
  return (
    <header>
        <Link to="/" className="logo">
          Travel<span>Log</span>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <a href="/contact">Contact Us</a>
          {username && (
            <>
            {/* <span>Hello,{username}</span> */}
            <Link to='/create'>Create new Post</Link>
            <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
            <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
          )}
          
        </nav>
      </header>
  )
}

export default Header