
import gql from 'graphql-tag';

export default gql`
mutation addSolicitud($cantidad:Int!, $cliente: ID!, $gestor: ID!, $test: ID!){
  addSolicitud(cantidad: $cantidad, cliente: $cliente, gestor: $gestor, test: $test){
      id
    }
} 
`;