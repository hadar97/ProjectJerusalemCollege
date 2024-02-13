import React, { useContext, useEffect } from 'react'
import CreateCv from './createCv'
import { AppContext } from './context/context'

const AddNewCV = () => {
    const { thisUser, setThisUser, email, setEmail, thisCV, setThisCV } = useContext(AppContext)
    useEffect(() => {
        console.log(thisUser?.id)
        if (thisUser) {
            setThisCV({ ...thisCV, id: thisUser.id })
           
        }
        // console.log(thisUser) 
    }, [thisUser])
    console.log(thisCV)
    return (
        <>
            <CreateCv />
        </>
    )
}

export default AddNewCV