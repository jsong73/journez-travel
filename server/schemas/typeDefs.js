const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    trips: [Trip]
}

type Trip {
    _id: ID
    tripName: String
    description: String
    location: String
    startDate: String
    endDate: String
    itineraries: [Itinerary] 
}

type Itinerary {
    _id: ID
    category: String
    categoryName: String
    location: String
    startDate: String
    endDate: String
    price: String
    notes: String
    paid: Boolean
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String): User
    trips: [Trip]
    trip(tripId: ID!): Trip
    itinerary(itineraryId: ID!): Itinerary
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
   
    addTrip(
        userId: ID
        tripName: String
        description: String
        location: String
        startDate: String
        endDate: String
    ): Trip
    
    updateTrip(
        tripId: ID
        tripName: String
        description: String
        location: String
        startDate: String
        endDate: String
    ): Trip

    removeTrip(tripId: ID!): Trip

    addItinerary(
       tripId: ID
       category: String
       categoryName: String
       location: String
       startDate: String
       endDate: String
       price: String
       notes: String
       paid: Boolean
    ): Itinerary

    updateItinerary(
        itineraryId: ID
        categoryName: String
        location: String
        startDate: String
        endDate: String
        price: String
        notes: String
        paid: Boolean
    ): Itinerary

    removeItinerary(itineraryId: ID!, tripId: ID!): Trip
}
`;

module.exports = typeDefs;