import gql from 'graphql-tag';

export default gql`
query data($id: ID!) {
    gestor(id: $id) {
      id,
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