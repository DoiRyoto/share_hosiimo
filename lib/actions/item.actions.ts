import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebase/client"
import { ItemInterface } from "@/common.types"

interface ItemProps {
  userId: string;
  itemId: string;
}

export async function getItem({ userId, itemId }: ItemProps) {
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

export async function addItem(userId: string, itemData: ItemInterface) {
  try{
    console.log(itemData)
    const itemRef = doc(db, `users/${userId}/items`, itemData.id)
    await setDoc(itemRef, itemData, {merge: true})
  } catch (error) {
    console.log(error)
  }
}