import { gql } from "@apollo/client";

export const GET_ANTS = gql`
    query{
        ants{
        name,
        length,
        weight
        }
    }
`;