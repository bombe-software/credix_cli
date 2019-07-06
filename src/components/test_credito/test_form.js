import React from 'react';
import { Form, Field } from "react-final-form";
import GenericForm from '../reutilizables/generic_form';
//import io from 'socket.io-client';
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
            estado_emocional_1: null,
            estado_emocional_2: null
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
        const variables =
        {
            promedio_ingresos_mensuales: parseInt(values.promedio_ingresos_mensuales),
            cliente: this.state.id
        };

        await this.props.mutate({
            variables
        }).then((res) => {
            this.props.history.push({
                pathname: `/solicitud_confirmacion/${res.data.addTest.id}/${variables.cliente}`,
            })
        }
        ).catch((res) => {
            if (res.graphQLErrors) {
                const errors = res.graphQLErrors.map(error => error.message);
                const error = errors[0];
                this.setState({ error });
            }
        })
    }
    /*
        renderWebCam() {
            const socket = io.connect('http://localhost:9000');
            socket.on('image', (image) => {
                const imageElm = this.webcam.current;
                imageElm.src = `data:image/jpeg;base64,${image}`;
            });
        }
    */
    render() {
        //this.renderWebCam();
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
                                                            <option value="bienes de consumo duradero">Bienes de consumo duradero</option>
                                                            <option value="estudios">Estudios</option>
                                                            <option value="hipotecarios">Hipotecarios</option>
                                                            <option value="empresarial">Empresarial</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="tipo_interes_manejar"
                                                            component={this.renderSelectField}
                                                            type='number'
                                                            label="¿Cuál es el monto del crédito?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="variable">Variable</option>
                                                            <option value="fijo">Fijo</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="plazo"
                                                            component={this.renderSelectField}
                                                            type='number'
                                                            label="¿Cuál es el plazo?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="corto">Corto</option>
                                                            <option value="mediano">Mediano</option>
                                                            <option value="largo">Largo</option>

                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="motivo"
                                                            component={this.renderSelectField}
                                                            label="Qué tipo de interés se va a manejar"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="refaccionario">Refaccionario</option>
                                                            <option value="financiamiento">financiamiento</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="prestamo"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="¿Eres persona empleada?"
                                                        >
                                                            <option value="-">Selecciona una opción</option>
                                                            <option value="si">Si</option>
                                                            <option value="no">No</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                {/* <div className="level">
                                                    <div className="level-item">
                                                        <Field name="prestamo"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="(Si trabaja) ¿Cuáles son tus ingresos netos aproximados por mes?"
                                                        />
                                                    </div>
                                                </div> */}
                                                {/* <div className="level">
                                                    <div className="level-item">
                                                        <Field name="personas_economicamente_activas"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="¿Cuántas personas dependen económicamente de ti?"
                                                        />
                                                    </div>
                                                </div> */}
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="personas_economicamente_activas"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="¿Cuántas personas dependen económicamente de ti?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_arrienda"
                                                            component={this.renderTextField}
                                                            label="Aproximadamente, cuánto gasta en neto arrienda al mes?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_comida"
                                                            component={this.renderTextField}
                                                            label="Aproximadamente, cuánto gasta neto en comida al mes?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_transporte"
                                                            component={this.renderTextField}
                                                            label="Aproximadamente, cuánto gasta neto en transporte al mes?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_servicios"
                                                            component={this.renderTextField}
                                                            label="Aproximadamente, cuánto gasta neto en servicios(agua,electricidad,etc) al mes?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="gasto_deudas"
                                                            component={this.renderTextField}
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
                                                        <Field name="prestamo"
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
                                                        <Field name="promedio_ingresos_mensuales"
                                                            component={this.renderTextField}
                                                            type='number'
                                                            label="Promedio de ingresos mensuales"
                                                        />
                                                    </div>
                                                </div>

                                                {/* <code>{this.state.error}</code> */}
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
