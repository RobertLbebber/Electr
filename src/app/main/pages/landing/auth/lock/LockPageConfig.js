import { FuseLoadable } from "@fuse";
import { PAGE_LANDING_AUTH_LOCK } from "app/fuse-configs/pageLocations";

export const LockPageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_LOCK,
      component: FuseLoadable({
        loader: () => import("./LockPage")
      })
    }
  ]
};
