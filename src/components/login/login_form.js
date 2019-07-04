import React from 'react';
import { Form, Field } from "react-final-form";
import GenericForm from '../reutilizables/generic_form';
import { graphql } from 'react-apollo';
import login from "./../../mutations/especiales/login";
import usuario from "./../../queries/usuario";
import WaveBackground from '../reutilizables/wave_background';


class LoginForm extends GenericForm {
    
    constructor(props) {
        super(props);
        this.webcam = React.createRef()
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: ""
        }
    }
    async onSubmit(values) {   
        const { email, password } = values;
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [
                { query: usuario },
            ]
        })
            .then(() => this.props.props.history.push('/'))
            .catch(res => {
                console.log("ERROR");
            if(res.graphQLErrors){
                const errors = res.graphQLErrors.map(error => error.message);
                const error = errors[0];
                this.setState({ error });
            }
            });
    }

    render() {
        return(
        <div>
            <section className="hero is-large">
            <div className="section">
                <div className="columns">
                <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                    <div className="box" style={{padding: "48px"}}>
                    <h1 className="is-size-2 has-text-weight-semibold	 has-text-centered">
                        Login
                    </h1>
                    <br />
                    <p className="subtitle has-text-centered">
                        Inicia sesion con su correo y su contraseña para acceder a la plataforma.
                    </p>
                    <br />
                    <Form
                        onSubmit={this.onSubmit}
                        validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Ingrese su correo electronico";
                        }
                        if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            errors.email = 'Correo inválido';
                        }
                        if (!values.password) {
                            errors.password = "Ingrese su password";
                        } 
                        
                        return errors;
                        }}
                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            
                            <div className="level">
                            <div className="level-item">
                                <Field name="email"
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
                              {this.state.error?<code>{this.state.error}</code>:""}
                            <br />
                            <div className="buttons has-text-centered">
                            <button type="submit" className="button is-primary is-size-5" disabled={submitting}>
                                <strong className="is-size-5"> Iniciar sesión </strong>
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
 

export default graphql(login)(LoginForm);
  