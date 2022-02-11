import Home from "./Views/Home/HomePage";
import AboutUs from "./Views/AboutUs/AboutUs";
import Login from "./Views/Login/Login";
import Register from "./Views/Login/Register";
import ForgetPwd from "./Views/Login/ForgetPwd";
const routes = [
  {
    path: "login",
    name: "Login",
    component: Login,
    layout: "auth",
  },
  {
    path: "register",
    name: "Register",
    component: Register,
    layout: "auth",
  },
  {
    path: "forgetPassword",
    name: "ForgetPwd",
    component: ForgetPwd,
    layout: "auth",
  },
  {
    path: "home",
    name: "Home",
    component: Home,
    layout: "app",
    showInSidebar: true,
  },
  {
    path: "aboutus",
    name: "AboutUs",
    component: AboutUs,
    layout: "app",
    showInSidebar: true,
  },
];
export const authRoutes = routes.filter((route) => route.layout === "auth");
export const appRoutes = routes.filter((route) => route.layout === "app");
export const sidebarRoutes = routes.filter(
  (route) => route.layout === "app" && route.showInSidebar
);
