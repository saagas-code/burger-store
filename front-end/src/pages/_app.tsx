import '@src/styles/globals.css'
import type { AppProps } from 'next/app'
import { queryClient } from './../services/queryClient';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './../redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}
