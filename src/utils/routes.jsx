import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Blog from "../pages/Blog"
import Services from "../pages/Services"
import NotFound from "../pages/NotFound";
import Skills from "../pages/Skills.jsx";
import ContactMe from "../pages/ContactMe.jsx";
import AboutMe from "../pages/AboutMe.jsx";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/services", element: <Services /> },
    { path: "/skills", element: <Skills /> },
    { path: "/contact-me", element: <ContactMe /> },
    { path: "/about-me", element: <AboutMe /> },
    { path: "/blogs", element: <Blog /> },
    { path: "/*", element: <NotFound /> },
])

export default router