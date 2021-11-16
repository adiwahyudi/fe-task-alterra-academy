import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://crisp-swine-61.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'vJ1DYXP59p0cYLWP62W8VXtmEZfa9gf2RtQ5EDNEuTvBXQQdfwC8vgXq8oQYYGsd'
    }
  });

export default client