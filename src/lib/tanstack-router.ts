import { RouterContext } from "@tanstack/react-router";

import { queryClient } from "./tanstack-query";

const routerContext = new RouterContext<{
  queryClient: typeof queryClient;
}>();

export { routerContext };
