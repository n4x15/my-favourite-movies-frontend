import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import Header from "src/components/Header/Header";
import { urlToGql } from "src/graphql/config";
import "src/i18n";
import "src/index.css";
import { AppProps } from "next/app";
import PrivateRoute from "src/components/PrivateRouter/privateRouter";

const App = ({ Component, pageProps }: AppProps) => {
  const client = new ApolloClient({
    link: urlToGql,
    ssrMode: true,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
        <Header />
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
    </ApolloProvider>
  );
};

export default App;
