import gql from 'graphql-tag';

export default gql`
{
    clientes{
      id,
      nombre,
      rfc 
    }
}
`;