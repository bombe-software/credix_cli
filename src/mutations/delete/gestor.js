import gql from 'graphql-tag';

export default gql`
mutation data($gestor: ID!){
    inhabilitarGestor(gestor: $gestor) {
        id
    }
}
`;