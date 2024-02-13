import React, { useContext, useEffect } from 'react'
import ShowMyData from './showMyData'
import { AppContext } from './context/context'

const ListMyData = () => {
    const { thisCVs, setThisCVs } = useContext(AppContext)
    useEffect(()=>{
     console.log(thisCVs)
    },[thisCVs])
  
    return (
        <>
   {thisCVs.length==0?<h2>You have no CVS 😞</h2>:<></>}
           <>{thisCVs?.map((item,i) => {
                 return ( 
                   <ShowMyData  item={item} key={i} index={i}/>
                 )})}
                    </>     

        </>
    )
}

export default ListMyData