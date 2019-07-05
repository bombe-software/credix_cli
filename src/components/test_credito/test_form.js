import React from 'react';
import { Form, Field } from "react-final-form";
import GenericForm from '../reutilizables/generic_form';
//import io from 'socket.io-client';
import WebcamCapture from "./webcam_capture";
import WaveBackground from '../reutilizables/wave_background';
class Test extends GenericForm {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            error: ""
        }
        this.canvas = React.createRef();
    }

    async onSubmit(values) {
        console.log(values);
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
                                    {/**
                                    <WebcamCapture canvas={this.canvas} />
                                    <div >
                                        <canvas ref={this.canvas}></canvas>
                                    </div>
                                    */}
                                    <Form
                                        onSubmit={this.onSubmit}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.nombre) {
                                                errors.nombre = "Escriba el nombre completo";
                                            }
                                            if (/^\s+|\s+$/.test(values.nombre)) {
                                                errors.nombre = "Escriba un nombre completo válido";
                                            }
                                            if (!values.sexo) {
                                                errors.sexo = "Seleccione una opcion";
                                            }

                                            if (!values.correo) {
                                                errors.correo = "Ingrese su correo electronico";
                                            }
                                            if (!values.password) {
                                                errors.password = "Ingrese su password";
                                            }

                                            if (values.password !== values.rpassword) {
                                                errors.rpassword = "No coinciden sus passwords";
                                            }
                                            return errors;
                                        }}
                                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                            <form onSubmit={handleSubmit}>

                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="nombre"
                                                            component={this.renderTextField}
                                                            label="Nombre completo"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="sexo"
                                                            component={this.renderSelectField}
                                                            label="Sexo"
                                                        >
                                                            <option value="-">Seleccione una opcion</option>
                                                            <option value="male">Femenino</option>
                                                            <option value="female">Masculino</option>

                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="correo"
                                                            component={this.renderTextField}
                                                            label="Correo electronico"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="password"
                                                            component={this.renderPasswordField}
                                                            label="Ingrese su password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="rpassword"
                                                            component={this.renderPasswordField}
                                                            label="Ingrese nuevamente su password"
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

export default Test;
