import gql from 'graphql-tag';

export default gql`
{
  usuario {
    id,
    nombre_usuario,
    tipo_usuario
  }
}
`;