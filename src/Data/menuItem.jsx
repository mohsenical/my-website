import { FaHome, FaUser, FaBlog } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";

const menuItem = [
    { id: 1, title: "صفعه اصلی", href: "/" },
    { id: 2, title: "درباره من", href: "/contact-me" },
    { id: 3, title: "ارتباط با من", href: "/about-me" },
    { id: 4, title: "مقالات", href: "/blogs" },
]

const sideBarItems = [
    { id: 1, title: "صفعه اصلی", href: "/", icon: <FaHome /> },
    { id: 2, title: "درباره من", href: "/contact-me", icon: <FaUser /> },
    { id: 3, title: "ارتباط با من", href: "/about-me", icon: <FiMessageSquare /> },
    { id: 4, title: "مقالات", href: "/blogs", icon: <FaBlog /> },
    { id: 5, title: "پروژه ها", href: "/projects", icon: <AiFillProject /> },
]

export { menuItem, sideBarItems}