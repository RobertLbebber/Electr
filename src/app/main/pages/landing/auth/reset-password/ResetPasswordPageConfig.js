import { FuseLoadable } from "@fuse";
import { PAGE_LANDING_AUTH_RESET_PASSWORD } from "app/fuse-configs/pageLocations";

export const ResetPasswordPageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_RESET_PASSWORD,
      component: FuseLoadable({
        loader: () => import("./ResetPasswordPage")
      })
    }
  ]
};
