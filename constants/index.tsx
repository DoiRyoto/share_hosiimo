import { ItemInterface, ItemListInterface } from '@/common.types';
import { ReactElement } from 'react';
import { FiHome, FiList, FiSettings, FiUsers} from 'react-icons/fi';

type BottomLink = {
  label: string;
  route: string;
  icon: ReactElement
}

export const BottombarLinks: BottomLink[]= [
  {
    label: "Home",
    route: "/",
    icon: (<FiHome />)
  },
  {
    label: "MyList",
    route: "/mylist",
    icon: (<FiList />)
  },
  {
    label: "Community",
    route: "/community/friend",
    icon: (<FiUsers />)
  },
]

export const initThumbnailUrl = [
  "https://firebasestorage.googleapis.com/v0/b/share-hosiimo.appspot.com/o/Items%2F1513425768-1.png?alt=media&token=df5a6fd8-b614-4e6d-acfb-1a13a83492d3&_gl=1*94ct75*_ga*NDA1NjgzNTc5LjE2OTIxMDM4Mjg.*_ga_CW55HF8NVT*MTY5NjgzMzA5MS44My4xLjE2OTY4MzU1ODcuNjAuMC4w",
  "https://firebasestorage.googleapis.com/v0/b/share-hosiimo.appspot.com/o/Items%2F1513578437.png?alt=media&token=0caa2c95-fe0d-4ecc-beac-be3923cac42f&_gl=1*1wg4vle*_ga*NDA1NjgzNTc5LjE2OTIxMDM4Mjg.*_ga_CW55HF8NVT*MTY5NjgzMzA5MS44My4xLjE2OTY4MzU2MTIuMzUuMC4w",
  "https://firebasestorage.googleapis.com/v0/b/share-hosiimo.appspot.com/o/Items%2F1514805242.png?alt=media&token=7e8cb285-5b40-423d-87f5-7455603a6191&_gl=1*c0g71u*_ga*NDA1NjgzNTc5LjE2OTIxMDM4Mjg.*_ga_CW55HF8NVT*MTY5NjgzMzA5MS44My4xLjE2OTY4MzU2MjcuMjAuMC4w",
  "https://firebasestorage.googleapis.com/v0/b/share-hosiimo.appspot.com/o/Items%2F1515290605.png?alt=media&token=8cf98a2b-41b8-4bc2-b480-d8f2c513efad&_gl=1*504qr6*_ga*NDA1NjgzNTc5LjE2OTIxMDM4Mjg.*_ga_CW55HF8NVT*MTY5NjgzMzA5MS44My4xLjE2OTY4MzU2NDAuNy4wLjA.",
  "https://firebasestorage.googleapis.com/v0/b/share-hosiimo.appspot.com/o/Items%2F1517391732-2.png?alt=media&token=0ad899f9-a589-469e-9b52-c5a8bac74ec8&_gl=1*165lox*_ga*NDA1NjgzNTc5LjE2OTIxMDM4Mjg.*_ga_CW55HF8NVT*MTY5NjgzMzA5MS44My4xLjE2OTY4MzU2NTAuNjAuMC4w",
  "https://console.firebase.google.com/u/0/project/share-hosiimo/storage/share-hosiimo.appspot.com/files/~2FItems?hl=ja",
]

export const initItem: ItemInterface = {
  id: "",
  name: "",
  description: "",
  thumbnailUrl: initThumbnailUrl[Math.floor(Math.random() * initThumbnailUrl.length)],
  createAt: "",
  createBy: "",
  alreadyBuy: false
}

export const initMyList: ItemListInterface = {
  id: "",
  name: "デフォルト",
  description: "初期設定",
  thumbnailUrl: initThumbnailUrl[Math.floor(Math.random() * initThumbnailUrl.length)],
  createAt: "",
  createBy: "",
}