import React from "react";
import Routes from "./Routes";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-client-preset";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/redux/store";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.code-challenge.ze.delivery/public/graphql",
  }),
});

const App = () => {
  return (
    <StoreProvider store={store}>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </StoreProvider>
  );
};

export default App;
