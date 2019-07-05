import gql from 'graphql-tag';

export default gql`
query data($id: ID!) {
    solicitud(id: $id) {
      id,
      nombre,
      telefono,
      solicitud{
          id
      }
      domicilio,
      edad,
      curp,
      rfc
    }
  }
`;