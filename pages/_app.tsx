import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Main } from "../components/Main";
import { QueryClientProvider, QueryClient } from "react-query";
import Layout from "../components/Layout";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Main>
          <QueryClientProvider client={client}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Main>
      </Layout>
    </>
  );
}
