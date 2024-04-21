import ForgotPasswordPage from "../pages/auth/forgot-password/ForgotPasswordPage";
import LoginPage from "../pages/auth/login/LoginPage";
import AuthLayout from "../pages/shared/layouts/auth-layout/auth-layout";
import { renderRoutes } from "./generate-routes";
import { RouteConfigInterface } from "./interfaces/RouteInterface";

export const routes: RouteConfigInterface[] = [
  {
    layout: AuthLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/",
        isPublic: true,
        isAuthorized: false,
      },
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/login",
        isPublic: true,
        isAuthorized: false,
      },
      {
        name: "forgotPassword",
        title: "Forgot Password",
        component: ForgotPasswordPage,
        path: "/forgot-password",
        isPublic: true,
        isAuthorized: false,
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
