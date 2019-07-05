import gql from 'graphql-tag';

export default gql`
query data($id: ID!) {
    cliente(id: $id) {
      id,
      nombre,
      telefono,
      solicitud{
          id
      }
      domicilio,
      curp,
      rfc
    }
  }
`;