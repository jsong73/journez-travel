import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_TRIP = gql`
    mutation addTrip($userId: ID, $tripName: String, $description: String, $location: String, $startDate: String, $endDate: String) {
        addTrip(userId: $userId, tripName: $tripName, description: $description, location: $location, startDate: $startDate, endDate: $endDate) {
            tripName
        }
    }
`;

export const UPDATE_TRIP = gql`
    mutation updateTrip($tripId: ID, $tripName: String, $description: String, $location: String, $startDate: String, $endDate: String) {
        updateTrip(tripId: $tripId, tripName: $tripName, description: $description, location: $location, startDate: $startDate, endDate: $endDate) {
            tripName
        }
    }
`;

export const REMOVE_TRIP = gql`
    mutation removeTrip($tripId: ID!){
        removeTrip(tripId: $tripId) {
            _id
        }
    }
`;

export const ADD_ITINERARY = gql`
    mutation addItinerary($tripId: ID, $category: String, $categoryName: String, $location: String, $startDate: String, $endDate: String, $price: String, $notes: String, $paid: Boolean){
        addItinerary(tripId: $tripId, category: $category, categoryName: $categoryName, location: $location, startDate: $startDate, endDate: $endDate, price: $price, notes: $notes, paid: $paid){
            category
        }
    }
`;

export const UPDATE_ITINERARY = gql`
    mutation updateItinerary($itineraryId: ID, $categoryName: String, $location: String, $startDate: String, $endDate: String, $price: String, $notes: String, $paid: Boolean){
        updateItinerary(itineraryId: $itineraryId, categoryName: $categoryName, location: $location, startDate: $startDate, endDate: $endDate, price: $price, notes: $notes, paid: $paid){
            categoryName
        }
    }
`;

export const REMOVE_ITINERARY = gql`
    mutation removeItinerary($itineraryId: ID!, $tripId: ID!){
        removeItinerary(itineraryId: $itineraryId, tripId: $tripId) {
            _id
        }
    }
`;