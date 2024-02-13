import { useContext, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../context/context";


export const useLogin = () => {
  const [error, setError] = useState(null);
  const { thisUser, setThisUser,email,setEmail,thisCV,setThisCV } = useContext(AppContext)
  const login = async (email, password) => {
    try {
      console.log(email + " " + password)
      setError(null);
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in:", res.user);
      // setThisCV({...thisCV,id:res.user.uid})

    }
    catch (err) {
      setError(err.message);
    }
  }
  return { error, login }
}
