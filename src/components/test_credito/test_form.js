import React from 'react';
import { Form, Field } from "react-final-form";
import GenericForm from '../reutilizables/generic_form';
import io from 'socket.io-client';
import WebcamCapture from "./webcam_capture";
import { graphql } from 'react-apollo';
import WaveBackground from '../reutilizables/wave_background';
import addTest from '../../mutations/add/test';

class Test extends GenericForm {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            error: "",
            estado_emocional_1: "",
            estado_emocional_2: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleEstadoEmocional = this.handleEstadoEmocional.bind();
    }
    handleEstadoEmocional(estado_emocional_1, estado_emocional_2) {
        this.setState({
            estado_emocional_1,
            estado_emocional_2
        })
    }


    async onSubmit(values) {
        let cliente = this.props.match.params.id;
        let { tipo_prestamo, monto_credito, tipo_interes_manejar, plazo, motivo, persona_empleada, personas_dependientes,
            personas_economicamente_activas, promedio_ganancia_mensual, gasto_arrienda, gasto_comida, gasto_transporte, gasto_servicios,
            gasto_deudas, trabajo_formal, seguros, cuenta_pago_compania, edad, escolaridad,ordenar,comprar_nuevo,estado_civil,trabajo,plaza,bateria,math
        } = values;
        if (persona_empleada === "si") {
            persona_empleada = true;
        } else persona_empleada = false;

        if (trabajo_formal === "si") {
            trabajo_formal = true;
        } else trabajo_formal = false;
        if (seguros === "si") {
            seguros = true;
        } else seguros = false;
        if (cuenta_pago_compania === "si") {
            cuenta_pago_compania = true;
        } else cuenta_pago_compania = false;
        
        let estado_emocional_1 = this.state.estado_emocional_1;
        let estado_emocional_2 = this.state.estado_emocional_2;

        //Listo para la mutation


        const variables =
        {
            cliente,
            tipo_prestamo,
            monto_credito: parseInt(monto_credito),
            tipo_interes_manejar, plazo, motivo, persona_empleada,
            personas_dependientes: parseInt(personas_dependientes),
            personas_economicamente_activas: parseInt(personas_economicamente_activas),
            promedio_ganancia_mensual: parseInt(promedio_ganancia_mensual),
            gasto_arrienda: parseInt(gasto_arrienda), gasto_comida: parseInt(gasto_comida), gasto_transporte: parseInt(gasto_transporte),
            gasto_servicios: parseInt(gasto_servicios), gasto_deudas: parseInt(gasto_deudas),
            trabajo_formal, seguros, cuenta_pago_compania,
            edad: parseInt(edad), escolaridad, estado_emocional_1, estado_emocional_2,
            ordenar: parseInt(ordenar),comprar_nuevo: parseInt(comprar_nuevo),estado_civil,trabajo,plaza,bateria,math: parseInt(math)
        };

        await this.props.mutate({
            variables
        }).then((res) => {
            this.props.history.push({
                pathname: `/solicitud_confirmacion/${res.data.addTest.id}/${variables.cliente}`,
            })
        }
        ).catch((res) => {
            console.log(res);
            if (res.graphQLErrors) {
                const errors = res.graphQLErrors.map(error => error.message);
                const error = errors[0];
                this.setState({ error });
            }
        })
    }
    
        renderWebCam() {
            const socket = io.connect('http://localhost:9000');
            socket.on('image', (image) => {
                const imageElm = this.webcam.current;
                imageElm.src = `data:image/jpeg;base64,${image}`;
            });
        }
    
    render() {
        this.renderWebCam();
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Test de credito
                            </h1>
                            <h2 className="subtitle">
                                Comience el test y verifica si es candidato para el credito
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                                <div className="box" style={{ padding: "48px" }}>
                                    <br />
                                    <h1 className="title has-text-centered">
                                        Test
                                    </h1>
                                    <br />
                                    <p className="subtitle has-text-centered">
                                        Bievenido. Realice estas preguntas al cliente para detectar mediante
                                        sus respuestas y sus gestos faciales si tiene una anomalia en su
                                        comportamiento.
                                    </p>
                                    <br />

                                    <WebcamCapture handleEstadoEmocional={this.handleEstadoEmocional}  />

                                    <Form
                                        onSubmit={this.onSubmit}
                                        validate={values => {
                                            const errors = {};



                                            return errors;
                                        }}
                                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="tipo_prestamo"
                                                            component={this.renderSelectField}
                                                            label="¿Qué tipo de préstamo necesita?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="personal">Personal</option>
                                                            <option value="estudios">Estudios</option>
                                                            <option value="hipotecarios">Hipotecarios</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="monto_credito"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="¿Cuál es el monto del crédito?"
                                                        >
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="plazo"
                                                            component={this.renderSelectField}
                                                            label="¿Cuál es el plazo?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="corto">Corto (un año)</option>
                                                            <option value="mediano">Mediano (un a tres año)</option>
                                                            <option value="largo">Largo (mayor a tres años)</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="tipo_interes_manejar"
                                                            component={this.renderSelectField}
                                                            label="Qué tipo de interés se va a manejar"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="fijo">Fijo</option>
                                                            <option value="variable">Variable</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="motivo"
                                                            component={this.renderSelectField}
                                                            label="¿Cuál es el motivo de su crédito?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="refaccionario">Refaccionario</option>
                                                            <option value="financiamiento">Financiamiento</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="prestamo"
                                                            component={this.renderSelectField}
                                                            label="¿Eres persona empleada?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="si">Si</option>
                                                            <option value="no">No</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="personas_dependientes"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="¿Cuántas personas dependen económicamente de ti?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="personas_economicamente_activas"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="De las personas con las que vives, cuántas de ellas se encuentran dentro de la población económicamente activa?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="promedio_ganancia_mensual"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="¿Cuáles son tus ingresos netos aproximados por mes??"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_arrienda"
                                                            component={this.renderTextField}
                                                            type="number"
                                                            label="Aproximadamente, cuánto gasta en renta al mes?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_comida"
                                                            component={this.renderTextField}
                                                            type="number"
                                                            label="Aproximadamente, cuánto gasta neto en comida al mes?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_transporte"
                                                            component={this.renderTextField}
                                                            type="number"
                                                            label="Aproximadamente, cuánto gasta neto en transporte al mes?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_servicios"
                                                            component={this.renderTextField}
                                                            type="number"
                                                            label="Aproximadamente, cuánto gasta neto en servicios(agua,electricidad,etc) al mes?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_deudas"
                                                            component={this.renderTextField}
                                                            type="number"
                                                            label="¿Cuál es el gasto neto de cada mes en deudas que ya tiene?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="trabajo_formal"
                                                            component={this.renderSelectField}
                                                            label="¿Usted esta incorporado al trabajo formal?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="si">Si</option>
                                                            <option value="no">No</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="seguros"
                                                            component={this.renderSelectField}
                                                            label="¿Cuenta con seguros? (vida, auto, salud, etc.)"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="si">Si</option>
                                                            <option value="no">No</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="cuenta_pago_compañia"
                                                            component={this.renderSelectField}
                                                            label="¿La empresa donde estas solicitando el crédito, es la misma en la que recibes tu nomina?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="si">Si</option>
                                                            <option value="no">No</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="edad"
                                                            component={this.renderTextField}
                                                            label="Ingrese la edad"
                                                            type="number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="escolaridad"
                                                            component={this.renderSelectField}
                                                            label="¿Cuál es la escolaridad maxima alcanzada?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="nula">Nula</option>
                                                            <option value="primaria">Primaria</option>
                                                            <option value="secundaria">Secundaria</option>
                                                            <option value="preparatoria">Preparatoria</option>
                                                            <option value="universidad">Universidad</option>
                                                            <option value="posgrado">Posgrado</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="ordenar"
                                                            component={this.renderSelectField}
                                                            label="¿Cuánto tiempo te dedicas a ordenar?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value={0}>Más de 30 minutos</option>
                                                            <option value={1}>15 a 30 minutos</option>
                                                            <option value={2}>Menos de 10 minutos</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="comprar_nuevo"
                                                            component={this.renderSelectField}
                                                            label="¿Cuando compras algo nuevo...?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value={0}>Lo coloco en su sitio</option>
                                                            <option value={2}>Tardo en sacarlo de la bolsa</option>
                                                            <option value={1}>Siempre me deshago de otra cosa para que no se acumule</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="estado_civil"
                                                            component={this.renderSelectField}
                                                            label="¿Cuál es tu estado civil?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="casado">Casado</option>
                                                            <option value="divorciado">Divociado</option>
                                                            <option value="viudo">Viudo</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="trabajo"
                                                            component={this.renderSelectField}
                                                            label="¿En qué trabaja?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="oficio">Oficio</option>
                                                            <option value="licenciado">Licenciado</option>
                                                            <option value="ingeniero">Ingeniero</option>
                                                            <option value="abogado">Abogado</option>
                                                            <option value="salud">Salud</option>
                                                            <option value="social">Social</option>
                                                            <option value="servidor_publico">Servidor público</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="plaza"
                                                            component={this.renderSelectField}
                                                            label="¿Cuándo vas a la plaza, que es lo primero que te llama la atención?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="tecnologia">Tecnología</option>
                                                            <option value="ropa">Ropa</option>
                                                            <option value="cine">Cine</option>
                                                            <option value="comida">Comida</option>
                                                        </Field>
                                                    </div>
                                                </div>

                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="bateria"
                                                            component={this.renderSelectField}
                                                            label="Cuándo cargas tu celular normalmente?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="trabajo">Durante el trabajo</option>
                                                            <option value="noche">En la noche</option>
                                                            <option value="tarde">En la tarde</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="math"
                                                            component={this.renderTextField}
                                                            type="number"
                                                            label={`Memoria el sig. número. Se lo repetiré 2 veces: ${Math.floor(Math.random()*(963187456321-161578287928+1)+161578287928)}`}
                                                        />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="buttons has-text-centered">
                                                    <button type="submit" className="button is-primary" disabled={submitting}>
                                                        Registrarse
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WaveBackground />
            </div>

        );
    }
}

export default graphql(addTest)(Test);
