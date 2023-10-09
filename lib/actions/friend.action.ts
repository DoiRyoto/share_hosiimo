import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase/client";
import { ItemInterface, UserProfile } from "@/common.types";
import { addItem } from "./item.actions";

export async function getFriend(friendId: string) {
  try{
    const friendRef = doc(db, `users`, friendId)
    const friendSnapshot = await getDoc(friendRef)
    if(!friendSnapshot.exists()) {
      return null
    } else {
      return friendSnapshot.data() as UserProfile
    }
  } catch (error) {
    console.log(error)
  }
}

export async function setFriend(userId: string, friendId: string) {
  try{
    const friendRef = doc(db, `users/${userId}/friends/${friendId}`)
    await setDoc(friendRef, {id: friendId}, {merge: true})
  } catch (error) {
    console.log(error)
  }
}

export async function getFriendIdList(userId: string) {
  let friendIdList: string[] = []
  try{
    const col = collection(db, `users/${userId}/friends`);
    const querySnapshot = await getDocs(col);
    querySnapshot.forEach((doc) => {
      friendIdList.push(doc.data()["id"] as string)
    })
    return friendIdList
  } catch (error) {
    console.log(error)
  }
}

export async function getFriendList(userId: string) {
  const friendIdList = await getFriendIdList(userId)
  try {
    const request = friendIdList!.map(getFriend)
    const friendList = await Promise.all(request)
    return friendList
  } catch (error) {
    console.log(error)
  }
}

export async function setFriendItem(itemData: ItemInterface, userId: string, friendId: string) {
  try{
    const userFriendRef = doc(db, `users/${userId}/friends/${friendId}/share/`, itemData.id)
    const friendUserRef = doc(db, `users/${friendId}/friends/${userId}/share/`, itemData.id)
    const request = [setDoc(userFriendRef, {id: itemData.id}, {merge: true}), setDoc(friendUserRef, {id: itemData.id}, {merge: true})]
    await Promise.all(request)
  } catch (error) {
    console.log(error)
  }
}