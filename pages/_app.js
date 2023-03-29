import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import Layout from "../components/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#558cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: "#F44336",
        },
    },
});

export default function MyApp(props) {
    const [queryClient] = useState(() => new QueryClient());
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Crm</title>
                <meta
                    name='viewport'
                    content='initial-scale=1, width=device-width'
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <Container>
                            <Component {...pageProps} />
                        </Container>
                    </Layout>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
