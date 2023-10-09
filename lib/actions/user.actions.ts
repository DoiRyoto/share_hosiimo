import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
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

export async function searchUser(userId: string) {
  let result: UserProfile[] = []
  try{
    const userRef = collection(db, "users")
    const q = query(userRef, where("id", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      result.push(doc.data() as UserProfile)
    });
    return result
  } catch (error) {
    console.log(error)
  }
}