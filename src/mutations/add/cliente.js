import gql from 'graphql-tag';

export default gql`
mutation cliente($nombre: String!, $telefono : String!, $domicilio : String!,
  $curp : String!, $rfc : String!){
        addCliente(nombre: $nombre, telefono: $telefono, domicilio: $domicilio, curp: $curp, rfc: $rfc) {
            id
        }
    }
`;