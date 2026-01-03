import { FaHome, FaUser, FaBlog } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiSkills } from "react-icons/gi";


const menuItem = [
    { id: 1, title: "معرفی", href: "/" },
    { id: 4, title: "درباره من", href: "/about-me" },
    { id: 1, title: "خدمات", href: "/services" },
    { id: 3, title: "مهارت ها", href: "/skills" },
    { id: 4, title: "تماس", href: "/contact-me" },
    { id: 5, title: "مقالات", href: "/blogs" },
]

const sideBarItems = [
    { id: 1, title: "صفعه اصلی", href: "/", icon: <FaHome /> },
    { id: 2, title: "درباره من", href: "/about-me", icon: <FaUser /> },
    { id: 1, title: "خدمات", href: "/services", icon: <MdOutlineCleaningServices /> },
    { id: 3, title: "مهارت ها", href: "/skills", icon: <GiSkills /> },
    { id: 3, title: "تماس", href: "/contact-me", icon: <FiMessageSquare /> },
    { id: 4, title: "مقالات", href: "/blogs", icon: <FaBlog /> },
]







export { menuItem, sideBarItems}