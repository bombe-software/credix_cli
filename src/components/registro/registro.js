import React from 'react';
// import { graphql } from 'react-apollo';
import { Form, Field } from "react-final-form";
import GenericForm from '../reutilizables/generic_form';
import WaveBackground from '../reutilizables/wave_background';
//import signup from './';

class Registro extends GenericForm {

    constructor(props) {
        super(props);
        this.state = {
            token: this.props.match.params.token
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(values) {
        console.log({ ...values, token: this.state.token });
        this.props.history.push('/registro_completo');
    }

    render() {
        return (
            <div>
                <section class="hero is-primary">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Registrate
                            </h1>
                            <h2 class="subtitle">
                                Llene los campos requeridos y comience ahora mismo
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
                                        Registrate
                    </h1>
                                    <br />
                                    <p className="subtitle has-text-centered">
                                        Registrate en el siguiente formulario para que usted pueda acceder
                                        a todas las funcionalidades. Ten en cuenta que todos los datos deben
                                        ser igual a como aperece en su credencial oficial de identificacion.
                    </p>
                                    <br />
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

                                            if (!values.nombre_usuario) {
                                                errors.nombre_usuario = "Escriba un nombre de usuario";
                                            }
                                            if (!values.sexo) {
                                                errors.sexo = "Seleccione una opcion";
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
                                                        <Field name="nombre_usuario"
                                                            component={this.renderTextField}
                                                            label="Nombre  de usuario"
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

export default Registro;
