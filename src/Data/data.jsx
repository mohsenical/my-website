import { FaHome, FaUser, FaBlog } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";

import { FaLaptop } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const menuItem = [
    { id: 1, title: "معرفی", href: "/" },
    { id: 1, title: "خدمات", href: "/services" },
    { id: 2, title: "پروژه ها", href: "/projects" },
    { id: 3, title: "مهارت ها", href: "/skills" },
    { id: 4, title: "تماس", href: "/contact-me" },
    { id: 5, title: "مقالات", href: "/blogs" },
]

const sideBarItems = [
    { id: 1, title: "صفعه اصلی", href: "/", icon: <FaHome /> },
    { id: 2, title: "درباره من", href: "/contact-me", icon: <FaUser /> },
    { id: 3, title: "ارتباط با من", href: "/about-me", icon: <FiMessageSquare /> },
    { id: 4, title: "مقالات", href: "/blogs", icon: <FaBlog /> },
    { id: 5, title: "پروژه ها", href: "/projects", icon: <AiFillProject /> },
]

const ServicesBoxs = [
    {
        id: 1,
        title: "طراحی سایت",
        desc: "محتوای سایتهای داینامیک بعد از طراحی توسط افراد عادی که دسترسی به سیستم مدیریت محتوای سایت را داشته باشند قابل تغییر است.",
        icon: <FaLaptop />
    },
    {
        id: 2,
        title: "طراحی سایت های 3 بعدی",
        desc: "طراحی سایت های 3 بعدی: مثلا معماری خانه های کامل در وب یاسایت های اسکرولری و... با پکیج three.js",
        icon: <TbBrandThreejs />
    },
    {
        id: 3,
        title: "برنامه نویس بلاک چین",
        desc: "ساخت قرارداد های هوشمند از جمله توکن و nft در بستر بلاک چین اتریوم . ",
        icon: <SiSolidity />
    },
    {
        id: 3,
        title: "برنامه نویس بلاک چین",
        desc: "ساخت قرارداد های هوشمند از جمله توکن و nft در بستر بلاک چین اتریوم . ",
        icon: <SiSolidity />
    },
    {
        id: 3,
        title: "برنامه نویس بلاک چین",
        desc: "ساخت قرارداد های هوشمند از جمله توکن و nft در بستر بلاک چین اتریوم . ",
        icon: <SiSolidity />
    },
    {
        id: 3,
        title: "برنامه نویس بلاک چین",
        desc: "ساخت قرارداد های هوشمند از جمله توکن و nft در بستر بلاک چین اتریوم . ",
        icon: <SiSolidity />
    },

]

export { menuItem, sideBarItems, ServicesBoxs }