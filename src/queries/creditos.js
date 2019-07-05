import gql from 'graphql-tag';

export default gql`
{
    solicitudes_gestor{
      id, 
      status
    }
  }
`;