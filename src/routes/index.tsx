import { Router } from "@tanstack/react-router";

import { indexRoute, profile, search, rootRoute } from "./public";
import { queryClient } from "@/lib/tanstack-query";

const routeTree = rootRoute.addChildren([indexRoute, profile, search]);

const router = new Router({
  routeTree,
  defaultPreload: "intent",
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
