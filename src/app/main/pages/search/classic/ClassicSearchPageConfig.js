export const ClassicSearchPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/pages/search/classic",
      component: React.lazy(() => import("./ClassicSearchPage")),
    },
  ],
};
