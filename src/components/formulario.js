import React from 'react';
import { Form, Field } from "react-final-form";
import GenericForm from './reutilizables/generic_form';

class Formulario extends GenericForm {

    async onSubmit(values) {   
        console.log(values);
    }

    render() {
        return(
        <div>
            <section className="hero is-large">
            <div className="section">
                <div className="columns">
                <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                    <div className="box" style={{padding: "48px"}}>
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
                        if (!values.sexo) {
                            errors.sexo = "Seleccione una opcion";
                        }

                        if (!values.correo) {
                            errors.correo = "Ingrese su correo electronico";
                        }
                        if (!values.password) {
                            errors.password = "Ingrese su password";
                        } 
                        
                        if (values.password!==values.rpassword) {
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
        </div>
        );
    }
}
 
export default Formulario;
  