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
    getPerson(id) {
        return this.client.query({
            query: gql`
                query{
                    person(id: ${JSON.stringify(id)}) {
                        id
                        name
                        birthYear
                        eyeColor
                        gender
                        hairColor
                        height
                        skinColor
                        mass
                        homeworld{
                            name
                            population
                            terrains
                            climates
                        }
                        filmConnection{
                            films{
                                title
                                releaseDate
                                director
                            }
                        }
                        starshipConnection{
                            starships{
                                name
                                model
                                starshipClass
                                passengers
                                pilotConnection{
                                pilots{
                                    name
                                }
                                }
                            }
                        }
                            vehicleConnection{
                                vehicles{
                                    name
                                    model
                                    vehicleClass
                                    passengers
                                    pilotConnection{
                                    pilots{
                                        name
                                    }
                                }
                            }
                        }    
                    }
                }
            `});
    }
}

export const ApiProvider = (props) => (
    <ApiContext.Provider value={new Api()}>{props.children}</ApiContext.Provider>
)