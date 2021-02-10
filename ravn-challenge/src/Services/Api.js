import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

export const ApiContext = React.createContext();
const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
});

class Api {
    constructor() {
        this.client = client;
        console.log("🚀 ~ file: Api.js ~ line 15 ~ Api ~ constructor ~ this.client", this.client)
    }
    fetchTest() {
        return this.client.query({
            query: gql`
            query {
                allFilms {
                    films {
                        title
                    }
                }
            }
            `
        })
    }
    getAllPeople() {
        return this.client.query({
            query: gql`
            query {
                allPeople {
                    people {
                        id
                        name
                        gender
                        hairColor
                        eyeColor
                        skinColor
                        birthYear
                        height
                    } 
                }
            }
            `
        })
    }
}

export const ApiProvider = (props) => (
    <ApiContext.Provider value={new Api()}>{props.children}</ApiContext.Provider>
    // <ApolloProvider client={client}>
    // </ApolloProvider>
)