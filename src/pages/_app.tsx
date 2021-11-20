import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import createEmotionCache from "../utils/createEmotionCache";
import Layout from "../components/_App/Layout";
import "../styles/globals.scss";
import store from "../store";

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();
const persistor = persistStore(store);

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

const App = ({
  emotionCache = clientSideEmotionCache,
  Component,
  pageProps,
}: Props) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </CacheProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

export default App;
