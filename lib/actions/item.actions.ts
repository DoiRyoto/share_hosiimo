import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebase/client"
import { ItemInterface } from "@/common.types"

export async function getItem(userId: string, itemId: string) {
  try{
    const itemRef = doc(db, `users/${userId}/items/${itemId}`)
    const itemSnapshot = await getDoc(itemRef)
    if(!itemSnapshot.exists()) {
      return null
    } else {
      return itemSnapshot.data() as ItemInterface
    }
  } catch (error) {
    console.log(error)
  }
}

export async function setItem(userId: string, itemData: ItemInterface) {
  try{
    const itemRef = doc(db, `users/${userId}/items`)
    await setDoc(itemRef, itemData, {merge: true})
  } catch (error) {
    console.log(error)
  }
}