import { PAGE_LANDING_AUTH_REGISTER } from "app/fuse-configs/pageLocations";

export const RegisterPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_REGISTER,
      component: React.lazy(() => import("./RegisterPage")),
    },
  ],
};
