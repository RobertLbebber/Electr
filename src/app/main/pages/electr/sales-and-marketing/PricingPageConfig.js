import React from "react";
import { PAGE_ELECTR_PRICING } from "app/fuse-configs/pageLocations";

export const PricingPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: PAGE_ELECTR_PRICING,
      component: React.lazy(() => import("./PricingPage")),
    },
  ],
};
