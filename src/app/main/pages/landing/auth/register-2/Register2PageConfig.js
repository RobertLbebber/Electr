import { FuseLoadable } from "@fuse";
import { PAGE_LANDING_AUTH_REGISTER_2 } from "app/fuse-configs/pageLocations";

export const Register2PageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_REGISTER_2,
      component: FuseLoadable({
        loader: () => import("./Register2Page")
      })
    }
  ]
};
