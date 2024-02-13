import { useState, useEffect } from "react";
// import { db } from "../firebase/config";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config"
import { addDoc } from 'firebase/firestore'
import { doc, deleteDoc } from 'firebase/firestore'
import { updateDoc } from 'firebase/firestore'


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

export const addNewDocCV = async (newObj) => {
  console.log(newObj)
  const ref = collection(db, 'cvs')
  await addDoc(ref,newObj)
}

export const onDelClick = async (id) => {
  const ref = doc(db, "cvs", id);
  await deleteDoc(ref);
}

export const onEditDoc = async (id, updateTitle) => {
  const ref = doc(db, "cvs", id)
  await updateDoc(ref,updateTitle);
}



export const findByid = async (id) => {
  let user = {};
  let dataAr=[]
  try {
    const querySnapshot = await getDocs(collection(db, "cvs"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      if (doc.data().id == id) {
        user = doc.data();
        dataAr.push(user)
        //  console.log(doc.data());
        console.log(dataAr)
        //  d=user
      }
    })
    return dataAr;
  } catch (error) {
    console.error('שגיאה בקריאה למסמך:', error);
    return dataAr
  }


}