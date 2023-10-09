import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase/client";
import { UserProfile } from "@/common.types";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseError } from "firebase/app";


export async function getUser(userId: string) {
  try{
    const userRef = doc(db, "users", userId)
    const userSnapshot = await getDoc(userRef)
    if(!userSnapshot.exists()) {
      return null
    } else {
      return userSnapshot.data() as UserProfile
    }
  } catch (error) {
    console.log(error)
  }
}

export async function setUser(userData: UserProfile) {
  try{
    const userRef = doc(db, "users", userData.id)
    await setDoc(userRef, userData, {merge: true})
  } catch (error) {
    console.log(error)
  }
}