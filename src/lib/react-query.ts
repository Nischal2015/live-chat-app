import { QueryClient, DefaultOptions } from '@tanstack/react-query';

import { STATE_TIME_IN_MILLISECONDS } from '@/config';

const defaultQueryConfig: DefaultOptions = {
  queries: {
    staleTime: STATE_TIME_IN_MILLISECONDS,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryConfig,
});
