import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog"
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about-me", element: <About /> },
    { path: "/contact-me", element: <Contact /> },
    { path: "/blogs", element: <Blog /> },
    { path: "/*", element: <NotFound /> },
])

export default router