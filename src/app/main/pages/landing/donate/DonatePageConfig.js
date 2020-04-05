import { PAGE_LANDING_DONATE } from "app/fuse-configs/pageLocations";

export const DonatePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: PAGE_LANDING_DONATE,
      component: React.lazy(() => import("./DonatePage")),
    },
  ],
};
