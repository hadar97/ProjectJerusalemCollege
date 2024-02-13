import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from './context/context'


const CreateEducation = () => {
    const subjectRef = useRef()
    const timestart = useRef()
    const timeend = useRef()
    const [flag, setflag] = useState(false)
    const { thisUser, setThisUser ,thisCV,setThisCV} = useContext(AppContext)
    const save = () => {
        setflag(false)
        let subject = subjectRef.current.value
        if (timestart > timeend) {
            alert("worng years")
            return
        }
        let obj = {
            subject: subject,
            time_frame_start: timestart.current.value,
            time_frame_end: timeend.current.value
        }
        setThisCV({ ...thisCV }, thisCV.educations.push(obj))
        // setThisCV({ ...thisCV,id_user:thisUser.id })
        console.log(thisCV)
    }
    return (
        <> <button  className=" m-3 btn btn-info"onClick={() => { setflag(!flag) }}>Add Education section</button>
            {flag &&
                <div>
                    <label>Education:</label>
                    <input className="form-control border" ref={subjectRef} type="text" />
                    <label>Time start</label>
                    <input className='form-control' type='date' ref={timestart} />
                    <label>Time end</label>
                    <input className="form-control" type='date' ref={timeend} />
                    <button className='btn btn-info m-2' onClick={save}>Save</button></div>}
        </>
    )
}

export default CreateEducation