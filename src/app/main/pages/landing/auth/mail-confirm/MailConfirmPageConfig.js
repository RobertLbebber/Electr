import { FuseLoadable } from "@fuse";
import { PAGE_LANDING_AUTH_MAILING } from "app/fuse-configs/pageLocations";

export const MailConfirmPageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: PAGE_LANDING_AUTH_MAILING,
      component: FuseLoadable({
        loader: () => import("./MailConfirmPage")
      })
    }
  ]
};
