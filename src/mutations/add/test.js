
import gql from 'graphql-tag';

export default gql`
mutation test($cliente: ID!, $tipo_prestamo : String!, $monto_credito : Int!,
  $tipo_interes_manejar : String!, $plazo : String!, $motivo: String!, $persona_empleada: Boolean!,
	$personas_dependientes: Int!, $personas_economicamente_activas: Int!, $promedio_ganancia_mensual: Int!,
  $gasto_arrienda: Int!, $gasto_comida: Int!, $gasto_transporte: Int!, $gasto_servicios: Int!,
  $gasto_deudas: Int!, $trabajo_formal: Boolean!, $seguros: Boolean!, $cuenta_pago_compania: Boolean!,
  $edad: Int!, $escolaridad: String!, $estado_emocional_1: String!, $estado_emocional_2: String!, $ordenar: Int!,
	$comprar_nuevo: Int!, $estado_civil: String!, $trabajo:String!, $plaza: String!, $bateria: String!, $math: Int!){
        addTest(cliente: $cliente, tipo_prestamo: $tipo_prestamo, monto_credito: $monto_credito, 
          tipo_interes_manejar: $tipo_interes_manejar, plazo: $plazo, motivo: $motivo, persona_empleada: $persona_empleada,
        	personas_dependientes: $personas_dependientes, personas_economicamente_activas:$personas_economicamente_activas,
          promedio_ganancia_mensual: $promedio_ganancia_mensual, gasto_arrienda: $gasto_arrienda,
          gasto_comida: $gasto_comida, gasto_transporte: $gasto_transporte, gasto_servicios: $gasto_servicios,
          gasto_deudas: $gasto_deudas, trabajo_formal:$trabajo_formal, seguros: $seguros, cuenta_pago_compania: $cuenta_pago_compania,
          edad: $edad, escolaridad: $escolaridad, estado_emocional_1: $estado_emocional_1, estado_emocional_2:$estado_emocional_2,
        	ordenar:$ordenar, comprar_nuevo: $comprar_nuevo, estado_civil: $estado_civil, trabajo: $trabajo, plaza: $plaza,
          bateria: $bateria, math: $math){
      
      id
    }
  }


`;