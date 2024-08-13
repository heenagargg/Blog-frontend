import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setRedirect]=useState(false)

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'}, 
    });
    if (response.status === 200) {
      setRedirect(true)
      toast.success("Registration done successfully!")
    } else {
      //alert('registration failed');
      toast.error("Registration Failed!")
    }
  }
  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <form className='login register' onSubmit={register}>
        <h1>Register</h1>
            <input type="text" placeholder='username' value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type="password" placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button>Register</button>
        </form>
  )
}

export default RegisterPage