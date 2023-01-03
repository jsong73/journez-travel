import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            trips {
                _id
                tripName
                description
                location
                startDate
                endDate
            }
        }
    }
`;

export const QUERY_TRIP = gql`
    query trip($tripId: ID!) {
        trip(tripId: $tripId){
            tripName
            description
            location
            startDate
            endDate
            itineraries {
                _id
                category
                categoryName
                location
                startDate
                endDate
                price
                notes
                paid
            }
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            trips {
                _id
                tripName
                description
                location
                startDate
                endDate
            }
        }
    }
    `;