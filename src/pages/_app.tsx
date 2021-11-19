import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";

import createEmotionCache from "../utils/createEmotionCache";
import Layout from "../components/_App/Layout";
import "../styles/globals.scss";

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

interface AppPropsWithEmotionCache extends AppProps {
  emotionCache?: EmotionCache;
}

const App = ({
  emotionCache = clientSideEmotionCache,
  Component,
  pageProps,
}: AppPropsWithEmotionCache) => (
  <QueryClientProvider client={queryClient}>
    <CacheProvider value={emotionCache}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  </QueryClientProvider>
);

export default App;
