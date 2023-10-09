import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { db } from "../firebase/client"
import { ItemListInterface } from "@/common.types"
import { getItem } from "./item.actions";

interface Props {
  userId: string;
  myListId: string;
}

interface ItemProps {
  userId: string;
  itemId: string;
}

export async function getMyList(props: Props) {
  try{
    const myListRef = doc(db, `users/${props.userId}/mylists/${props.myListId}`)
    const myListSnapshot = await getDoc(myListRef)
    if(!myListSnapshot.exists()) {
      return null
    } else {
      return myListSnapshot.data() as ItemListInterface
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getMyListIdList(userId: string) {
  let myListIdList: Props[] = []
  try{
    const col = collection(db, `users/${userId}/mylists`);
    const querySnapshot = await getDocs(col);
    querySnapshot.forEach((doc) => {
      myListIdList.push({userId: userId, myListId: doc.data()["id"] as string})
    })
    return myListIdList
  } catch (error) {
    console.log(error)
  }
}

export async function getMyLists(userId: string) {
  const myListIdList = await getMyListIdList(userId)
  try {
    const request = myListIdList!.map(getMyList)
    const myLists = await Promise.all(request)
    return myLists
  } catch (error) {
    console.log(error)
  }
}

export async function getMyListItemIdList(props: Props) {
  let myListItemIdList: ItemProps[] = []
  try{
    const col = collection(db, `users/${props.userId}/mylists/${props.myListId}/list_items`)
    const querySnapshot = await getDocs(col);
    querySnapshot.forEach((doc) => {
      myListItemIdList.push({userId: props.userId, itemId: doc.data()["id"] as string})
    })
    return myListItemIdList
  } catch (error) {
    console.log(error)
  }
}

export async function getMyListItems(props: Props) {
  const myListIdList = await getMyListItemIdList(props)
  try{
    const request = myListIdList!.map(getItem)
    const myListItems = await Promise.all(request)
    return myListItems
  } catch (error) {
    console.log(error)
  }
}

export async function addMyList(userId: string, myListData: ItemListInterface) {
  try{
    const myListRef = doc(db, `users/${userId}/mylists`, myListData.id)
    await setDoc(myListRef, myListData, {merge: true})
  } catch (error) {
    console.log(error)
  }
}

export async function setMyListItem(userId: string, myListId: string, itemId: string) {
  try{
    const myListItemRef = doc(db, `users/${userId}/mylists/${myListId}/list_items`, itemId)
    await setDoc(myListItemRef, {id: itemId}, {merge: true})
  } catch (error) {
    console.log(error)
  }
}