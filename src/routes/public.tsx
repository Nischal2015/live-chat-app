import { Route } from "@tanstack/react-router";

import { routerContext } from "@/lib/tanstack-router";
import App from "@/App";
import { MainLayout } from "@/components/layout/main-layout";

const rootRoute = routerContext.createRootRoute({
  component: () => {
    return <MainLayout />;
  },
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const profile = new Route({
  getParentRoute: () => rootRoute,
  path: "profile",
  component: () => {
    return (
      <div>
        <p>Profile</p>
      </div>
    );
  },
});

const search = new Route({
  getParentRoute: () => rootRoute,
  path: "search",
  component: () => {
    return (
      <div>
        <p>Search</p>
      </div>
    );
  },
});

export { indexRoute, profile, search, rootRoute };
