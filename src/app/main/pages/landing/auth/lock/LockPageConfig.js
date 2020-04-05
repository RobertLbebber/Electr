import { PAGE_LANDING_AUTH_LOCK } from "app/fuse-configs/pageLocations";

export const LockPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_LOCK,
      component: React.lazy(() => import("./LockPage")),
    },
  ],
};
