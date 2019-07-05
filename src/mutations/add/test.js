
import gql from 'graphql-tag';

export default gql`
mutation addTest($promedio_ingresos_mensuales:Int!, $cliente: ID!){
  addTest(promedio_ingresos_mensuales: $promedio_ingresos_mensuales, cliente:$cliente){
    id
  }
} 
`;