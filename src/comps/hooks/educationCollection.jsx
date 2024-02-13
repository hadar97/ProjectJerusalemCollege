import { useState, useEffect } from "react";
// import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
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

export const addNewDoc = async (newObj) => {
  const ref = collection(db, 'education')
  await addDoc(ref,newObj).then((data)=>{return data._key.path.segments[1]})
}

export const onDelClick = async (id) => {
  const ref = doc(db, "education", id);
  await deleteDoc(ref);
}

export const onEditDoc = async (id, updateTitle) => {
  const ref = doc(db, "education", id)
  await updateDoc(ref,updateTitle);
}
