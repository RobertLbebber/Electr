import React from "react";

import { Redirect } from "react-router-dom";

export const TodoAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: "/apps/todo/label/:labelHandle/:todoId?",
      component: React.lazy(() => import("./TodoApp")),
    },
    {
      path: "/apps/todo/filter/:filterHandle/:todoId?",
      component: React.lazy(() => import("./TodoApp")),
    },
    {
      path: "/apps/todo/:folderHandle/:todoId?",
      component: React.lazy(() => import("./TodoApp")),
    },
    {
      path: "/apps/todo",
      component: () => <Redirect to="/apps/todo/all" />,
    },
  ],
};
