import gql from 'graphql-tag';

export default gql`
mutation aprobarDenegar($status: String!, $id : ID!){
    aprobarDenegar(status: $status, id: $id) {
        id
    }
}
`;