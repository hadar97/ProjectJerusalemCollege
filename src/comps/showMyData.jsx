import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/context'
import { findByEmail } from './hooks/useCollection '

const ShowMyData = (props) => {
    const { thisUser, setThisUser, email, setEmail,thisCV,setThisCV,designCv,setdesignCv } = useContext(AppContext)
   let item=props.item
   
    // useEffect(() => {
    //     async function check() {
    //         if (email) {
    //             const data = await findByEmail(email, setThisUser);
    //             console.log(data)
    //           setThisUser(data)
    //         }
    //     }
    //     check()
    // }, [])
    useEffect(()=>{
console.log("asdfghjk")
    },[])
              console.log(thisUser)
              console.log(thisCV)

    return (<>
    
         {thisUser &&
            <div className='form-control m-2'>
                <h2>Your CV details:</h2>
                <h3><strong>First name:  </strong>{thisUser.first_name}</h3>
                <p> <strong>Last name:  </strong>{thisUser.last_name}</p>
                <p><strong>Email:  </strong>{thisUser.email}</p>
             
      
                {item?.educations?.map((item) => {  
                    return (<div> <h4>Education</h4>
                        <p><strong>Subject:  </strong>{item.subject}</p>
                        <p><strong>Start date:  </strong>{item.time_frame_start}</p>
                        <p><strong>End date:  </strong>{item.time_frame_end}</p>
                    </div>)
                })}
              
                {item?.expirience?.map((item) => {
                    return (<div> <h4>Expirience</h4>
                        <p><strong>Company:  </strong>{item.company}</p>
                        <p><strong>Start date:  </strong>{item.time_frame_start}</p>
                        <p><strong>End date:  </strong>{item.time_frame_end}</p>
                    </div>)
                })}
<button className='btn btn-info' onClick={()=>{
  console.log("hjn")
  console.log(item)
setdesignCv({...designCv,item})
// setdesignCv({...designCv,thisUser})
}}>design this CV</button>
            </div>}
        </>
    )
}

export default ShowMyData