import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/client";
import { FirebaseError } from "firebase/app";

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

export async function uploadItemThumbnail(file: File, itemId: string): Promise<string> {
  try {
      const storageRef = ref(storage, `Items/${itemId + "." + file.name.split(".").pop()}`)
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