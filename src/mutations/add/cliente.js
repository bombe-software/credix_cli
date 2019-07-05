import gql from 'graphql-tag';

export default gql`
mutation cliente($nombre: String!, $telefono : String!, $domicilio : String!,
 $edad : Int!, $curp : String!, $rfc : String!){
        addCliente(nombre: $nombre, telefono: $telefono, domicilio: $domicilio, edad: $edad,
        curp: $curp, rfc: $rfc) {
            id
        }
    }
`;