import React from 'react';
import { Form, Field } from "react-final-form";
import GenericForm from '../reutilizables/generic_form';
//import io from 'socket.io-client';
//import WebcamCapture from "./webcam_capture";
import { graphql } from 'react-apollo';
import WaveBackground from '../reutilizables/wave_background';
import addTest from '../../mutations/add/test';


class Test extends GenericForm {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            error: "",
            estado_emocional: null
        }
        this.canvas = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(values) {
        const variables = { ...values, cliente: this.state.id };
        await this.props.mutate({
            variables
        }).then(() => this.props.history.push({
            pathname: '/solicitud',
            state: { sucess: true }
        })).catch((res) => {
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

                                            return errors;
                                        }}
                                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                            <form onSubmit={handleSubmit}>
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
