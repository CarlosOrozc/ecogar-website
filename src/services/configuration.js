
import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const Client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache()
});

export { Client };
export default Client;