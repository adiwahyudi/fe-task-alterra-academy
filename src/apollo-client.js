import {
    ApolloClient,
    InMemoryCache,
    split, 
    HttpLink,
  } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from '@apollo/client/link/ws'

// const client = new ApolloClient({
//     uri: 'https://crisp-swine-61.hasura.app/v1/graphql',
//     cache: new InMemoryCache(),
//     headers: {
//         'x-hasura-admin-secret': 'vJ1DYXP59p0cYLWP62W8VXtmEZfa9gf2RtQ5EDNEuTvBXQQdfwC8vgXq8oQYYGsd'
//     }
//   });

const httpLink = new HttpLink({
  uri: "https://crisp-swine-61.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "vJ1DYXP59p0cYLWP62W8VXtmEZfa9gf2RtQ5EDNEuTvBXQQdfwC8vgXq8oQYYGsd",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://crisp-swine-61.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "vJ1DYXP59p0cYLWP62W8VXtmEZfa9gf2RtQ5EDNEuTvBXQQdfwC8vgXq8oQYYGsd",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client