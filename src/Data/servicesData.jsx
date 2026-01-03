import { FaLaptop } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

export const servicesData = [
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
]

export default servicesData