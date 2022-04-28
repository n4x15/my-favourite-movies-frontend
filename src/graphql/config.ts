import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_URL_TO_GQL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("userToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const urlToGql = authLink.concat(httpLink);
