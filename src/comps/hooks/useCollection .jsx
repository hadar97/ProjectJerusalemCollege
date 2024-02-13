import { useState, useEffect, useContext } from "react";
// import { db } from "../firebase/config";
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config"
import { addDoc } from 'firebase/firestore'
import { doc, deleteDoc } from 'firebase/firestore'
import { updateDoc } from 'firebase/firestore'
import { AppContext } from "../context/context";


export const useCollection = (c) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let ref = collection(db, c)
    const unSub = onSnapshot(ref, (snapshot) => {
      let fire_ar = [];
      snapshot.docs.forEach(item => {
        fire_ar.push({ id: item.id, ...item.data() })
      })
      setDocs(fire_ar);
    })
    return () => unSub();
  }, [c])
  return { docs };
}

export const addNewDoc = async (newObj) => {
  console.log(newObj)
  const ref = collection(db, 'users')
 const data= await addDoc(ref, newObj)
 return data.id
}

export const onDelClick = async (id) => {
  const ref = doc(db, "users", id);
  await deleteDoc(ref);
}

export const onEditDoc = async (id, updateTitle) => {
  const ref = doc(db, "users", id)
  await updateDoc(ref, updateTitle);
}


export const findByEmail = async (email) => {
  let user = {};
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      if (doc.data().email == email) {
        user = doc.data();
        console.log(user)
        user.id=doc.id
        //  d=user
      }
    })
    return user;
  } catch (error) {
    console.error('שגיאה בקריאה למסמך:', error);
    return user
  }
//  return d

}


