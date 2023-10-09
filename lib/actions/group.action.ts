import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebase/client"
import { GroupInterface } from "@/common.types"

export async function getGroup(groupId: string) {
  try{
    const groupRef = doc(db, `groups/${groupId}`)
    const groupSnapshot = await getDoc(groupRef)
    if(!groupSnapshot.exists()) {
      return null
    } else {
      return groupSnapshot.data() as GroupInterface
    }
  } catch (error) {
    console.log(error)
  }
}

export async function addGroup(groupData: GroupInterface) {
  try{
    const groupRef = doc(db, `group`, groupData.id)
    await setDoc(groupRef, groupData, {merge: true})
  } catch (error) {
    console.log(error)
  }
}

export async function setMyGroup(userId: string, groupId: string) {
  try{
    const groupRef = doc(db, `users/${userId}/mygroups`, groupId)
    await setDoc(groupRef, {id: groupId}, {merge: true})
  } catch (error) {
    console.log(error)
  }
}