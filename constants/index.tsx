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
  "https://firebasestorage.googleapis.com/v0/b/share-hosiimo.appspot.com/o/Items%2F24202513.jpg?alt=media&token=8022c45f-aeac-4afe-9471-5afc79e56c19&_gl=1*7u7rzh*_ga*NDA1NjgzNTc5LjE2OTIxMDM4Mjg.*_ga_CW55HF8NVT*MTY5NzA5MTY4Mi44OC4xLjE2OTcwOTE3OTcuNi4wLjA."
]

export const initItem: ItemInterface = {
  id: "",
  name: "",
  description: "",
  thumbnailUrl: initThumbnailUrl[0],
  createAt: "",
  createBy: "",
  alreadyBuy: false
}

export const initMyList: ItemListInterface = {
  id: "",
  name: "デフォルト",
  description: "初期設定",
  thumbnailUrl: initThumbnailUrl[0],
  createAt: "",
  createBy: "",
}