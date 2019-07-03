import React from 'react';
import { Form, Field } from "react-final-form";
import GenericForm from '../reutilizables/generic_form';
import WaveBackground from '../reutilizables/wave_background';

class RegistroGestor extends GenericForm {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit({token}) {  
        this.props.history.push('/registro/'+ token);
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
                        if (!values.token) {
                            errors.token = "Escriba un token";
                        }
                        return errors;
                        }}
                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="level">
                            <div className="level-item">
                                <Field name="token"
                                component={this.renderTextField}
                                label="Ingrese su token"
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
            <WaveBackground/>
        </div>
        );
    }
}
 
export default RegistroGestor;