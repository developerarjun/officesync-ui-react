
import AuthLayout from "../layout/auth-layout/auth-layout";
import ForgotPasswordPage from "../modules/auth/forgot-password/ForgotPasswordPage";
import LoginPage from "../modules/auth/login/LoginPage";
import { RouteConfigInterface } from "../shared/utils";
import { renderRoutes } from "./generate-routes";

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
