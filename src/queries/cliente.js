import gql from 'graphql-tag';

export default gql`
query data($id: ID!) {
    cliente(id: $id) {
      id,
      nombre,
      telefono,
      solicitud{
          id,
          cantidad,
          status,
          fecha
      }
      domicilio,
      curp,
      rfc
    }
  }
`;