import gql from 'graphql-tag';

export default gql`
{
    gestores{
      id,
      status
      usuario{
        id,
        nombre
      },
      
    }
  }
`;