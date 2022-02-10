import { Layouts } from "./Constants/enumConfig";
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
    layout: Layouts.AUTH,
  },
  {
    path: "register",
    name: "Register",
    component: Register,
    layout: Layouts.AUTH,
  },
  {
    path: "forgetPassword",
    name: "ForgetPwd",
    component: ForgetPwd,
    layout: Layouts.AUTH,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    layout: Layouts.APP,
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    component: AboutUs,
    layout: Layouts.APP,
  },
];
export const authRoutes = routes.filter((route) => route.layout === "auth");
export const appRoutes = routes.filter((route) => route.layout === "app");
