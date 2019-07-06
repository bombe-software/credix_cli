import gql from 'graphql-tag';

export default gql`
mutation data($imagen: String!) {
    prediccion(imagen: $imagen) {
      string
    }
}
`;