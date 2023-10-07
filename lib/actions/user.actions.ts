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

export async function uploadAvatarImage(file: File, userId: string): Promise<string> {
  try {
      const storageRef = ref(storage, `Avatar/${userId + "." + file.name.split(".").pop()}`)
      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)
      return url
  }
  catch(error) {
      if (error instanceof FirebaseError) {
          throw FirebaseError;
      }
      throw Error("Failed to upload file. Unknown error occurred")
  }
}