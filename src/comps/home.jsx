import React, { useContext } from 'react'
import Theme_flower from './theme_flower'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './context/context'

const Home = () => {
  const { thisCVs, setThisCVs,thisUser } = useContext(AppContext)
  console.log(thisCVs)
  const nav=useNavigate()
  return (
<>
<div className='d-flex flex-wrap justify-content-center'>
<button className='m-2' style={{height:"200px", width:'400px',backgroundColor:'black', color:"white",   backgroundSize:'cover'}} onClick={()=>{
{nav("/blackTheme")}
}} >black theme</button>
<button  className='m-2' style={{height:"200px", width:'400px',backgroundColor:'pink', color:"white",   backgroundSize:'cover'}} onClick={()=>{
{nav("/flowerTheme")}
}}>flower theme</button>
<button  className='m-2' style={{height:"200px", width:'400px',backgroundColor:'brown', color:"white",   backgroundSize:'cover'}}onClick={()=>{
{nav("/brownTheme")}
}}>brown theme</button>
<button  className='m-2' style={{height:"200px", width:'400px',backgroundColor:'silver', color:"black",   backgroundSize:'cover'}}onClick={()=>{
{nav("/baseTheme")}
}}>base theme</button>
</div>
<button className='m-2' style={{height:"150px", width:'150px', borderRadius:"50%",backgroundColor:'skyblue', color:"white",   backgroundSize:'cover'}} onClick={()=>{
  {nav("/addnewCV")} 
}}>
Add new CV
</button>

{ thisUser?.role=="admin"&&
<button  className='m-2' style={{height:"150px", width:'150px', borderRadius:"50%",backgroundColor:'yellow', color:"white",   backgroundSize:'cover'}}onClick={()=>{
{nav("/Users")}
}} >Users</button>}
</>
  )
}

export default Home