
import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const useSignup = () => {
  const [error,setError] = useState(null);


  const signup = async(email, password) => {
      try{
      setError(null);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user sign in:", res.user);
      }
      catch(err){
        setError(err.message);
        console.log(err.message);
      }
    }
  
  
    return {error, signup}
  }
  