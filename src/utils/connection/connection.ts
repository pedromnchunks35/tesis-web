import axios from 'axios';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';


// Create an Axios instance with custom agents
const axiosInstance = axios.create({
});


// Define an async function using Axios
export const fetchData = async (urls: string[]): Promise<any> => {

    for (let i = 0; i < urls.length; i++) {
        try {
            const element = urls[i];
            const response = await axiosInstance.get(element);
            return response.data;
        } catch (error) { }
    }
    throw console.error("Could not make the request to any of the given urls");

};

export const graphqlClient = (url: string) => {
    return new ApolloClient({
        link: new HttpLink({ uri: `${url}/graphql` }), // Append '/graphql' to the base URL
        cache: new InMemoryCache(),
    });
};

export const executeGraphQLQuery = async (urls: string[], query: string, variables: any = {}): Promise<any> => {
    for (let i = 0; i < urls.length; i++) {
        try {
            const client = graphqlClient(urls[i]);
            const response = await client.query({
                query: gql`${query}`,
                variables,
                fetchPolicy: 'no-cache'
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to fetch from ${urls[i]}:`, error);
        }
    }
    throw new Error("Could not make the request to any of the given URLs");
};