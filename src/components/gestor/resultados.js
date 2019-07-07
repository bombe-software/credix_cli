import React from 'react';
import { graphql } from 'react-apollo';
import { Doughnut } from 'react-chartjs-2';
import resultado from './../../queries/solicitud';

import * as tf from '@tensorflow/tfjs';

const model = tf.loadLayersModel('http://localhost:3000/model12/model.json');

let proba = 0.5;

class Resultados extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            candidato: NaN,
            no_candidato: NaN,
            model, 
            prediccion: null
        };
        this.waitForPromise();
    }
    generateData(names, el) {
        if(el != undefined){
            proba = el;
        }
        return {
            labels: names,
            datasets: [{
                data: [proba, 1-proba],
                backgroundColor: [
                    'rgba(69, 196, 158, 0.9)',
                    'rgba(115, 86, 201, 0.9)',

                ],
                hoverBackgroundColor: [
                    'rgba(69, 196, 158, 1)',
                    'rgba(115, 86, 201, 1)',

                ]
            }]
        };
    }

    async waitForPromise() {
        // let result = await any Promise, like:
        const model = await tf.loadLayersModel('http://localhost:3000/model12/model.json');
        this.setState({model})
    }


    render() {
        if (this.props.data.loading) return (<div>Loading...</div>)
        if(!this.state.model.name) return (<div>Loading...</div>)
        
        const prediction  = this.state.model.predict(tf.tensor([6,5,2,3,4,4,3,8]).reshape([1,8]));
        const array = Array.prototype.slice.call(prediction.dataSync());
        console.log(array)
        let candidato = [
            'Si es candidato',
            'No es candidato',
        ];
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Resultados del analisis
                            </h1>
                            <h2 className="subtitle">
                                Después de un arudo análisis por parte de nuestro servidor, a continuación le mostramos las respuestas:
                            </h2>
                        </div>
                    </div>
                </section>

                <br />
                <div className="container">
                    <div className="box">
                        <div className="columns">
                            <div className="column ">
                                <Doughnut data={this.generateData(candidato, array[0])} /> <br />
                            </div>
                            <div className="column  has-text-centered">
                                <div className="is-size-3 has-text-centered">Amonestaciones en razon de los pagos</div>
                                <div className="is-size-2 has-text-centered"><strong>{array[1].toFixed(4)}</strong></div>
                                <br />
                                <div className="has-text-centered is-size-3"><strong>Resultado final:</strong></div>
                                <br />
                                <div className="has-text-centered is-size-3">{(this.generateData(candidato).datasets[0] > this.generateData(candidato).datasets[1]) ? "El perfíl sí es candidato para el crédito" : "El perfil no es candidato para el crédito"}</div>
                            </div>

                        </div>
                    </div>
                </div>

                <br />
            </div>
        );
    }
}

export default graphql(resultado, {
    options: (props) => { return { variables: { id: props.match.params.id } } }
})(Resultados);
