import React, { useContext, useRef } from 'react'
import { useLogin } from './hooks/useLogin'
import { AppContext } from './context/context';


export default function Login() {
  const { error, login } = useLogin();
  const { thisUser, setThisUser, email, setEmail, thisCV, setThisCV } = useContext(AppContext)
  const mailRef = useRef();
  const passRef = useRef();


  const onSub = (e) => {

    e.preventDefault();
    login(mailRef.current.value, passRef.current.value)
    setEmail(mailRef.current.value)
    console.log(error)
   


  }


  return (
    <div className='container'>
      <form onSubmit={onSub}>
        <label>Email:</label>
        <input className="form-control" ref={mailRef} type="email" />
        <br />
        <label>Password:</label>
        <input className="form-control" ref={passRef} type="password" />
        <h3 className='text-danger'>{error&&<>You need sign up first</>}</h3>
        <button className='btn btn-info'>Log in</button>
      </form>
    </div>
  )
}
