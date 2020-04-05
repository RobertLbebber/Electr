import React from "react";
import { PAGE_LANDING_AUTH_REGISTER_2 } from "app/fuse-configs/pageLocations";

export const Register2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_REGISTER_2,
      component: React.lazy(() => import("./Register2Page")),
    },
  ],
};
