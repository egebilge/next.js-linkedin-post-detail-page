import { AiFillHome } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import { AiTwotonePlusSquare } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoBag } from "react-icons/io5";

const bottomNavItems = [
  {
    title: "Ana Sayfa",
    icon: AiFillHome,
    href: "#",
  },
  {
    title: "Ağım",
    icon: FaPerson,
    href: "#",
    notification: 5,
  },
  {
    title: "Gönder",
    icon: AiTwotonePlusSquare,
    href: "#",
  },
  {
    title: "Bildirimler",
    icon: IoIosNotifications,
    href: "#",
    notification: 10,
  },
  {
    title: "İş İlanları",
    icon: IoBag,
    href: "#",
  },
];

export { bottomNavItems };
