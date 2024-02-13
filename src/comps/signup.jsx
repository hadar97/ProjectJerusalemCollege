import React, { useContext, useRef, useState } from "react";
import { useSignup } from "./hooks/useSignUp";
import { addNewDoc } from "./hooks/useCollection ";
import { useForm } from "react-hook-form";
import CreateCv from "./createCv";
import { AppContext } from "./context/context";
import { useNavigate } from "react-router";
import UpImage from "./addPic";


export default function Signup() {
  const { thisUser, setThisUser,thisCV,setThisCV } = useContext(AppContext)
  const [flag, setFlag] = useState(false)
  const { error, signup } = useSignup()
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()
  const nav = useNavigate()
  const first_nameRef = register("first_name", { required: true, minLength: 2 })
  const last_nameRef = register("last_name", { required: true, minLength: 2 })
  const passRef = register("password", { required: true , minLength: 6})
  const mailRef = register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })
  const mailRef2 = register("email2", {
    required: true, validate: (val) => {
      return val == getValues("email")
    }
  })



  const onSub = async(dataBody) => {
    setFlag(true)
    
    // signup(dataBody.email, dataBody.password)
    // dataBody.cvs = [{}]
    // dataBody.cvs[0].educations = []
    // dataBody.cvs[0].experiences = []
    console.log(dataBody)
    delete dataBody.email2
    setThisUser(dataBody)
    dataBody.role="user"
    dataBody.img_url=thisUser.img_url
    const myid= await addNewDoc(dataBody)
    console.log(myid)
    setThisCV({...thisCV,id:myid})

  }


  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit(onSub)} >
          <label>First Name:</label>
          <input className="form-control"  {...first_nameRef} type="text" />
          {errors.first_name && <div className='text-danger'>*  Atleast name at least 2 chars</div>}
          <label>Last Name:</label>
          <input className="form-control" {...last_nameRef} type="text" />
          {errors.last_name && <div className='text-danger'>* Atleast name at least 2 chars</div>}
          <label>Email:</label>
          <input className="form-control" {...mailRef} type="email" />
          {errors.email && <div className='text-danger'>* Your email is not valid</div>}
          <br />

          <label>Email Verify:</label>
          <input className="form-control"  {...mailRef2} type="email" />
          {errors.email2 && <div className='text-danger'>* Your email is not match</div>}
          <br />

          <label>Password:</label>
          <p>at least 6 chars</p>
          <input className="form-control" {...passRef} type="password" />
          {errors.password && <div className='text-danger'>* Password is require</div>}
          <br />
          <UpImage />
          <button className="btn btn-info" >OK,create Your CV</button>

        </form>
      </div>
      {flag && <CreateCv />}
    </>
  )
}  