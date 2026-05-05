import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { globalStore } from '#/context/global';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useSelector } from '@tanstack/react-store';

import '../styles.css'


interface RouterContext {
  auth: boolean;
  globalStore: typeof globalStore // Store'u context'e ekledik
};


export const Route = createRootRouteWithContext<RouterContext>()({
  component: App,
});

const queryClient = new QueryClient()

function App() {
  const isLoading = useSelector(globalStore, (state) => state.isLoading);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </QueryClientProvider>
  )
}


