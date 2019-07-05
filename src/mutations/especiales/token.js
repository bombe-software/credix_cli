import gql from 'graphql-tag';

export default gql`
mutation token($institucion: ID!, $token : String!){
    token(institucion: $institucion, token: $token) {
        id
    }
}
`;