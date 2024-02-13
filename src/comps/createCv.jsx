import React, { useContext, useRef, useState } from 'react'
import { AppContext } from './context/context'
import CreateEducation from './createEducation'
import CreateExpirence from './createExpirence'
import { addNewDoc } from './hooks/useCollection '
import { addNewDocCV } from './hooks/cvsCollection'
import { useLogin } from "./hooks/useLogin";

const CreateCv = () => {
    const {errorlogin, login} = useLogin();
    const { thisUser, setThisUser,thisCV } = useContext(AppContext)

    return (
        <>
            <CreateEducation />
            <CreateExpirence />
            <button className="btn btn-danger m-2 border border-black" onClick={() => {
                console.log(thisCV)
              addNewDocCV(thisCV)
              login(thisUser.email,thisUser.password)
            }}>save all</button>

        </>
    )
}

export default CreateCv