import React, { useContext, useEffect } from 'react'
import '../comp_css_theme/flower_theme.css'
import { AppContext } from './context/context'
import html2pdf from 'html2pdf.js';
const Theme_flower = () => {

  const {thisUser, designCv,setdesignCv } = useContext(AppContext)
  const handleDownloadPDF = () => {
    const content = document.getElementById('myDiv'); // הזהר עם ה-ID של ה-DIV שלך
    html2pdf().from(content).save();
  };
  useEffect(() => {

    console.log(designCv)
  }, [])
  return (
    <>
      <div className="cv-container" id='myDiv'>
        <div className="cv-section d-flex text-justify-start">
          <div className=' p-3 pt-0 border border-5' >
            <h3>private details</h3>{thisUser?.img_url?
            <img src={thisUser.img_url}  style={{width:"100px" , height:"100px",borderRadius:"50%"}}className='border'/>:
          <img src="../public/profile.png"  style={{width:"100px",borderRadius:"50%"}}className='border'/>}
            <h2 className="cv-title">{thisUser?.first_name} {thisUser?.last_name}</h2> <p>{thisUser?.email}</p></div>
           
            <div>
            {designCv.item?.expirience?.map((obj,i)=>{return(
              <div  key={i} className='border p-5 m-2  border-5'>
              <h3> Expirience</h3>
              <p>{obj.company}</p>
              <p>{obj.time_frame_end}</p>
              <p>{obj.time_frame_start}</p>
              </div>
            )})}
          <div >
            
          {designCv.item?.educations?.map((obj,i)=>{return(
              <div  key={i}className='border p-5 m-2  border-5'>
              <h3>Education</h3>
              <p>{obj.subject}</p>
              <p>{obj.time_frame_end}</p>
              <p>{obj.time_frame_start}</p>
              </div>
            )})}
              </div>
              </div>
        </div>

      </div>
<button  className="btn btn-info m-2" onClick={handleDownloadPDF}>Save As PDF</button>

    </>
  )
}

export default Theme_flower