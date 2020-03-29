import { FuseLoadable } from "@fuse";
import { PAGE_LANDING_AUTH_LOGIN_2 } from "app/fuse-configs/pageLocations";

export const Login2PageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_LOGIN_2,
      component: FuseLoadable({
        loader: () => import("./Login2Page")
      })
    }
  ]
};
