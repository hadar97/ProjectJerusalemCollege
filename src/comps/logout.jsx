import { useLogout } from "./hooks/useLogOut";
// call to hook

import React from 'react'

const Logout = () => {
    const {logout} = useLogout();
  return (
    <>
    <h1>Have a nice day!</h1>
    <a  class=" btn btn-info m-2"href="#" onClick={() => {logout()}}>Log out</a></>
  )
}

export default Logout

// example calling to the logout function from the hook
