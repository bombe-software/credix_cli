import React from 'react';
import { Form, Field } from "react-final-form";
import { graphql } from 'react-apollo';
import GenericForm from '../reutilizables/generic_form';
import WaveBackground from '../reutilizables/wave_background';

import addCliente from '../../mutations/add/cliente';

class Solicitud extends GenericForm {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(values) {
        const { nombre, domicilio, curp, rfc } = values;
        const telefono = values.telefono.toString();
        const edad = parseInt(values.edad);
        const ingresos = parseInt(values.ingresos);

        await this.props.mutate({
            variables: {
                nombre, telefono, domicilio, edad, curp, rfc, ingresos
            }
        }).then((res) => {
            this.props.history.push({
                pathname: `solicitud_credito/${res.data.addCliente.id}`,
                state: { sucess: true }
            })
        }).catch(err => { console.log(err) })
    }
    render() {
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Solicitud de crédito
                            </h1>
                            <h2 className="subtitle">
                                Comience la evaluación del préstamo de crédito al cliente.
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
                                        Información del cliente
                                    </h1>
                                    <br />
                                    <p className="subtitle has-text-centered">
                                        En este formulario, llene los campos de los datos proporcionados por el cliente para tener un
                                        registro en la base de datos y así, comenzar con el test analítico.
                                    </p>
                                    <br />
                                    <Form
                                        onSubmit={this.onSubmit}
                                        validate={values => {
                                            const errors = {};
                                            let ra = /^[+]?([0-9])$/;
                                            if (!values.nombre) {
                                                errors.nombre = "Escriba el nombre completo";
                                            }
                                            if (/^\s+|\s+$/.test(values.nombre)) {
                                                errors.nombre = "Escriba un nombre completo válido";
                                            }
                                            if (!values.telefono) {
                                                errors.telefono = "Ingrese su teléfono";
                                            }

                                            if (!values.domicilio) {
                                                errors.domicilio = "Ingrese el domicilio";
                                            }
                                            if (!values.edad) {
                                                errors.edad = "Ingrese la edad";
                                            }
                                            if (!ra.test(values.edad)) {
                                                errors.edad = "Ingrese una edad válida"
                                            }
                                            if (!values.curp) {
                                                errors.curp = "Ingrese el CURP";
                                            }
                                            if (!values.rfc) {
                                                errors.rfc = "Ingrese el RFC";
                                            }
                                            if (!values.ingresos) {
                                                errors.ingresos = "Ingrese el promedio de ingresos mensuales";
                                            }
                                            if (ra.test(values.ingresos)) {
                                                errors.ingresos = "Ingrese un ingreso válido";
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
                                                        <Field name="telefono"
                                                            component={this.renderTextField}
                                                            label="Teléfono"
                                                            type="number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="domicilio"
                                                            component={this.renderAreaText}
                                                            label="Domicilio"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="edad"
                                                            component={this.renderTextField}
                                                            label="Edad"
                                                            type="number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="curp"
                                                            component={this.renderTextField}
                                                            label="CURP"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="rfc"
                                                            component={this.renderTextField}
                                                            label="RFC"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="level">
                                                    <div className="level-item">
                                                        <Field name="ingresos"
                                                            component={this.renderTextField}
                                                            label="Promedio de ingresos mensuales"
                                                            type="number"
                                                        />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="buttons has-text-centered">
                                                    <button type="submit" className="button is-primary" disabled={submitting}>
                                                        Siguiente
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

export default graphql(addCliente)(Solicitud);