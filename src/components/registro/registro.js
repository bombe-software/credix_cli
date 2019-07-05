import React from 'react';
import { graphql } from 'react-apollo';
import { Form, Field } from "react-final-form";
import GenericForm from '../reutilizables/generic_form';
import WaveBackground from '../reutilizables/wave_background';
import signup from '../../mutations/especiales/signup';

class Registro extends GenericForm {

    constructor(props) {
        super(props);
        this.state = {
            token: this.props.match.params.token,
            error: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onSubmit(values) {
        console.log(this.props);
        const {
            nombre, nombre_usuario, sexo, email, password
        } = values;
        const token = this.state.token;

        await this.props.mutate({
            variables: {
                email, nombre, nombre_usuario, password, sexo, token
            }
        }).then(() => this.props.history.push({
            pathname: '/login',
            state: { sucess: true }
        })).catch((res) => {
            if (res.graphQLErrors) {
                const errors = res.graphQLErrors.map(error => error.message);
                const error = errors[0];
                this.setState({ error });
            }
        })
    }
    render() {
        return (
            <div>
                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Registrate
                            </h1>
                            <h2 className="subtitle">
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
                                    <h1 className=" has-text-weight-semibold is-size-1 has-text-centered has-text-info">
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
                                            if (values.nombre_usuario !== undefined) {
                                                var ra = /^[a-z0-9]+$/i;
                                                if (!ra.test(values.nombre_usuario)) {
                                                    errors.nombre_usuario = "Solo puede contener alfa numericos y sin espacios";
                                                }
                                            }

                                            if (!values.sexo) {
                                                errors.sexo = "Seleccione una opcion";
                                            }
                                            if (!values.sexo) {
                                                errors.sexo = "Seleccione una opcion";
                                            }

                                            if (!values.email) {
                                                errors.email = "Ingrese su email electronico";
                                            }
                                            if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                                                errors.email = 'Correo inválido';
                                            }
                                            if (!values.password) {
                                                errors.password = "Ingrese su password";
                                            }
                                            if (values.password !== undefined) {
                                                var re = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{6,}$/;
                                                if (!re.test(values.password)) {
                                                    errors.password = "Min. 6 caractéres, 1 mayuscula, 1 minuscula y sin espacios";
                                                }
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
                                                            <option value="-">Seleccione una opción</option>
                                                            <option value="Femenino">Femenino</option>
                                                            <option value="Masculino">Masculino</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="email"
                                                            component={this.renderTextField}
                                                            label="email electronico"
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
                                                {this.state.error ? <code>{this.state.error}</code> : ""}
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

export default graphql(signup)(Registro);
