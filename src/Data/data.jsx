import { FaHome, FaUser, FaBlog } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";

import { FaLaptop } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

import { TbBrandTailwind } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

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
]

const boxSkills = [
    {id: 1, icon: <TbBrandTailwind />, title: "Tailwind", status: "5 سال"},
    {id: 2, icon: <FaBootstrap />, title: "Bootstarp", status: "5 سال"},
    {id: 3, icon: <FaJs />, title: "JS", status: "5 سال"},
    {id: 4, icon: <FaReact />, title: "React.js", status: "4 سال"},
    {id: 5, icon: <RiNextjsFill />, title: "Next.js", status: "4 سال"},
    {id: 6, icon: <TbBrandThreejs />, title: "Three.js", status: "2 سال"},
    {id: 7, icon: <FaNodeJs />, title: "Node.js", status: "2 سال"},
    {id: 8, icon: <DiMongodb />, title: "MongoDB", status: "4 سال"},
]

const articlesData = [
    {id: 1, title: "نکست چیست و چرا نکست ؟؟", disc: "Next.js یک فریمورک React است که بهینه‌سازی‌های مختلفی روی اپلیکیشن‌های ری‌اکت اعمال می‌کند. ایده اصلی خلق چنین فریمورکی این بوده است که اطمینان یابیم اپلیکیشن ما با بالاترین عملکرد ممکن آغاز شده و باقی می‌ماند. بهینه‌سازی‌های زیادی وجود دارند که می‌توان به اپلیکیشن‌های ری‌اکت اضافه کرد و اغلب آن‌ها از سوی Next.js ارائه می‌شوند. در این مقاله به جمع‌بندی مقالات آموزش Next.js مجله فرادرس پرداخته‌ایم.", date: "1404/04/15", image: "/Image/Article/Next.webp"},
    {id: 2, title: "همه چیز درباره تیلویند سی اس اس :))", disc: "در مقالات قبلی وب سایت صعود به طور کلی و جامع در رابطه با CSS و کاربرد آن در ساخت صفحات وب صحبت کردیم در این مطلب می خواهیم در رابطه با اولین فریم ورک ارائه شده برای زبان CSS یعنی Tailwind CSS توضیح دهیم، و به بررسی نکات مهم این فریم ورک یعنی Tailwind CSS بپردازیم. پس اگر می خواهید در رابطه با موضوع Tailwind CSS چیست ؟ همه چیز درباره تیلویند سی اس اس اطلاعات با ارزشی کسب کنید در این مطلب ما را همراهی کنید. پیشنهاد کارشناسان گروه آموزش برنامه نویسی صعود این است که حتما قبل از خواندن این مقاله، مقالات CSS چیست؟ آشنایی با زبان سی اس اس و بهترین کتاب های آموزشی زبان HTML/CSS در جهان را مطالعه کنید.", date: "1404/04/20", image: "/Image/Article/Tailwind.webp"},
    {id: 3, title: "معماری ماژولار در پروژه های ری اکت !", disc: "تا حالا برات پیش اومده وسط یه پروژه ری اکت، بعد چند ماه کدنویسی، وقتی دنبال یه کامپوننت ساده میگردی، حس کنی توی یه جنگل تاریک و پر از پوشه و فایل گم شدی؟ این دقیقا همون جاییه که معماری ماژولار میاد به...", date: "1404/05/10", image: "/Image/Article/React.webp"},
]

export { menuItem, sideBarItems, ServicesBoxs, boxSkills , articlesData }