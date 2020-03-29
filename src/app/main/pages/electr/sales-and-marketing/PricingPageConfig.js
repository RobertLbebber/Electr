import { FuseLoadable } from "@fuse";
import { PAGE_ELECTR_PRICING } from "app/fuse-configs/pageLocations";

export const PricingPageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: PAGE_ELECTR_PRICING,
      component: FuseLoadable({
        loader: () => import("./PricingPage")
      })
    }
  ]
};
