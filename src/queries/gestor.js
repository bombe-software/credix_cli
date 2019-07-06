import gql from 'graphql-tag';

export default gql`
query data($id: ID!) {
    gestor(id: $id) {
      id,
      status,
     	usuario{
        id,
        nombre,
        nombre_usuario,
        sexo,
        email
      }
    }
  }
`;