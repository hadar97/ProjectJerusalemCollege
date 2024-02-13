import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from './context/context'

const CreateExpirence = (props) => {
  const companyRef = useRef()
  const [flag, setflag] = useState(false)
  const timestart = useRef()
  const timeend = useRef()
  const { thisUser, setThisUser,thisCV,setThisCV } = useContext(AppContext)


  const save = () => {
    setflag(false)
    let company = companyRef.current.value
    if (timestart > timeend) {
      alert("worng years")
      return
    }
    let obj = {
      company: company,
      time_frame_start: timestart.current.value,
      time_frame_end: timeend.current.value
    }
    console.log(obj)
    setThisCV({ ...thisCV }, thisCV.expirience.push(obj))
    // setThisCV({ ...thisCV,id_user:thisUser.id })
    console.log(thisCV)
  }


  useEffect(() => {
    console.log(thisCV)
  }, [])


  return (
    <>
      <button className='btn btn-info m-2' onClick={() => { setflag(!flag) }}>Add Expirience section</button>
      {flag && <div>

        <label>Expirience:</label><br></br>
        <label>Company:</label>
        <input className="form-control border" ref={companyRef} type="text" />
        <label>Time start</label>
        <input  className="form-control"type='date' ref={timestart} />
        <label>Time end</label>
        <input className='form-control' type='date' ref={timeend} />
        <button  className="btn btn-info m-2"onClick={save}>Save</button> </div>}
    </>
  )
}

export default CreateExpirence