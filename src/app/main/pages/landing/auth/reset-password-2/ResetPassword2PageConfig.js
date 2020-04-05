import React from "react";
import { PAGE_LANDING_AUTH_RESET_PASSWORD_2 } from "app/fuse-configs/pageLocations";

export const ResetPassword2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_RESET_PASSWORD_2,
      component: React.lazy(() => import("./ResetPassword2Page")),
    },
  ],
};
