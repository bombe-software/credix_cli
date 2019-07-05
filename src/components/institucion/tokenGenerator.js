import React, { Component } from 'react';
import { Form } from "react-final-form";
import { compose, graphql } from 'react-apollo';
import token from "./../../mutations/especiales/token";
import usuario from "./../../queries/usuario";
import WaveBackground from '../reutilizables/wave_background';

class TokenGenerator extends Component {

    constructor(props) {
        super(props);
        this.webcam = React.createRef()
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            token: ""
        }
    }
    async onSubmit() {
        const institucion = this.props.usuario_in.usuario.id;

        let TokenGenerator = require('token-generator')({
            salt: 'Token generator and tell me how much it is',
            timestampMap: 'abdjmopwxt', // 10 chars array for obfuscation proposes
        });
        let token = TokenGenerator.generate();

        this.props.generateToken({
            variables: {
                institucion, token
            }
        }).then(() => this.setState({ token }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                                <div className="box" style={{ padding: "48px" }}>
                                    <h1 className="is-size-2 has-text-weight-semibold	 has-text-centered">
                                        Generar token
                                    </h1>
                                    <br />
                                    <p className="subtitle has-text-centered">
                                        Hola. Proporcione el token generado a sus gestores de bancos para que puedan
                                        registrarse a la plataforma para su institución.
                                    </p>
                                    <br />
                                    <Form
                                        onSubmit={this.onSubmit}
                                        validate={values => {
                                            const errors = {};

                                            return errors;
                                        }}
                                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                            <form onSubmit={handleSubmit}>
                                                {this.state.token ? <div><div className="title has-text-centered">{this.state.token}</div><div className="has-text-centered is-size-7">No comparta este token con cualquiera, solo con sus gestores de bancos...</div></div> : ""}
                                                <br />
                                                <div className="buttons has-text-centered">
                                                    <button type="submit" className="button is-primary is-size-5" disabled={submitting}>
                                                        <strong className="is-size-5"> Generar </strong>
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

export default compose(
    graphql(token, {
        name: 'generateToken'
    }),
    graphql(usuario, {
        name: 'usuario_in'
    }))(TokenGenerator);