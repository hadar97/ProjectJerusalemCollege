
import { db } from './firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useCollection } from './hooks/useCollection '



const Users = () => {
    const { docs: toys } = useCollection("users")

    useEffect(() => {

        console.log(toys)
    }, [])


    return (
        <>

         

                <table className="table table-striped" style={{border:"2px solid black" ,padding:"12px"}}>
                    <tr >
                        <th style={{border:"2px solid gray" ,padding:"12px"}} >First name</th>
                        <th  style={{border:"2px solid gray" ,padding:"12px"}}>Last name</th>
                        <th  style={{border:"2px solid gray" ,padding:"12px"}}>Email</th>
                        <th  style={{border:"2px solid gray" ,padding:"12px"}}>Password</th>
                    </tr>
                    {toys.map(item => {
                        return (


                            <tr >
                                <td  style={{border:"2px solid gray" ,padding:"12px"}}>{item.first_name} </td>
                                <td style={{border:"2px solid gray" ,padding:"12px"}}>{item.last_name}</td>
                                <td  style={{border:"2px solid gray" ,padding:"12px"}}>{item.email}</td>
                                <td style={{border:"2px solid gray" ,padding:"12px"}}>{item.password}</td>
                            </tr>
                        )
                    })}   </table>
        
  
        </>
    )
}

export default Users