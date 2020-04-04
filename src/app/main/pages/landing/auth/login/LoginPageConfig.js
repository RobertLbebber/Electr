import { FuseLoadable } from "@fuse";
import { PAGE_LANDING_AUTH_LOGIN } from "app/fuse-configs/pageLocations";

export const LoginPageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_LOGIN,
      component: FuseLoadable({
        loader: () => import("./LoginPage")
      })
    }
  ]
};
