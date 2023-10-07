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
    label: "List",
    route: "/list",
    icon: (<FiList />)
  },
  {
    label: "Community",
    route: "/community",
    icon: (<FiUsers />)
  },
  {
    label: "Setting",
    route: "/setting",
    icon: (<FiSettings />)
  },
]