import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    );
}

export default MyApp;
