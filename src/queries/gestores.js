import gql from 'graphql-tag';

export default gql`
{
    gestores{
      id,
      usuario{
        id,
        nombre
      },
      
    }
  }
`;