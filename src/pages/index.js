// Modules
import { lazy } from "react";

// Re-Export Page Components
export const Home = lazy(() => import("./home/home.page"));
export const About = lazy(() => import("./about/about.page"));
export const Bookshelf = lazy(() => import("./bookshelf/bookshelf.page"));
