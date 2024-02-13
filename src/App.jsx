import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './comps/users'
import Login from './comps/login'
import Signup from './comps/signup'
import Theme_flower from './comps/theme_flower'
import Logout from './comps/logout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from './comps/context/context'
import Home from './comps/home'
import Header from './comps/headers'
import CreateCv from './comps/createCv'
import ShowMyData from './comps/showMyData'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from './comps/firebase/config'
import { findByEmail } from './comps/hooks/useCollection '
import Theme_brown from './comps/brown_theme'
import Theme_base from './comps/base_theme'
import Theme_black from './comps/black_theme'
import { findByid } from './comps/hooks/cvsCollection'
import ListMyData from './comps/listMyData'
import AddNewCV from './comps/addNewCV'
function App() {
const [thisUser,setThisUser]=useState()
const [email,setEmail]=useState();
const [thisCV,setThisCV]=useState({educations:[],expirience:[]});
const [thisCVs,setThisCVs]=useState([]);
const [designCv,setdesignCv]=useState({});

useEffect(()=>{
  onAuthStateChanged(auth,async(user)=>{
    if(user.email){
     const data=await findByEmail(user.email);
     setThisUser(data)
     console.log(data)
     const cvs=await findByid(data.id)
     setThisCVs(cvs)
     console.log(cvs) 
    }
    })
},[])
console.log(thisCVs)



  return (
    <>
  <BrowserRouter>
      <AppContext.Provider value={{
        thisUser,setThisUser,
        email,setEmail,thisCV,setThisCV,
        thisCVs,setThisCVs,
        designCv,setdesignCv
      }}>
        <Header />
        <Routes>
          <Route index element={ <Home/> }></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="Logout" element={<Logout />}></Route>
          <Route path="Signup" element={<Signup />}></Route>
          <Route path="showYourData" element={<ListMyData/>} />
          <Route path="flowerTheme" element={<Theme_flower/>} />
          <Route path="brownTheme" element={<Theme_brown/>} />
          <Route path="baseTheme" element={<Theme_base/>} />
          <Route path="blackTheme" element={<Theme_black/>} />
          <Route path="addnewCV" element={<AddNewCV/>} />
          <Route path="Users" element={<Users/>} />
          {/* <Route path="todo" element={<Todo/>}></Route> */}
          <Route path="*" element={<h2>Page 404 page not found</h2>}></Route>
        </Routes>
        </AppContext.Provider>
      </BrowserRouter>
     
    </>
  )
}

export default App
