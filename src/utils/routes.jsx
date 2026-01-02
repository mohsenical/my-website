import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog"
import Services from "../pages/Services"
import NotFound from "../pages/NotFound";
import Skills from "../pages/Skills.jsx";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/services", element: <Services /> },
    { path: "/skills", element: <Skills /> },
    { path: "/contact-me", element: <Contact /> },
    { path: "/about-me", element: <About /> },
    { path: "/blogs", element: <Blog /> },
    { path: "/*", element: <NotFound /> },
])

export default router