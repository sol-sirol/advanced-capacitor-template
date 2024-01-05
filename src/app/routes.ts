import { HomePage } from "@pages/home";
import { MainPage } from "@pages/main";
import { ProfilePage } from "@pages/profile";

export const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/main",
    component: MainPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
];
