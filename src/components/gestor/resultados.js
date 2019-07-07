import React from 'react';
import { graphql } from 'react-apollo';
import { Doughnut } from 'react-chartjs-2';
import resultado from './../../queries/solicitud';


class Resultados extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            candidato: NaN,
            no_candidato: NaN,
        };
    }

    generateData(names) {

        return {
            labels: names,
            datasets: [{
                data: [120, 230],
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



    render() {
        if (this.props.data.loading) return (<div>Loading...</div>)
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
                                <Doughnut data={this.generateData(candidato)} /> <br />
                            </div>
                            <div className="column  has-text-centered">
                                <div className="is-size-3 has-text-centered">Amonestaciones</div>
                                <div className="is-size-2 has-text-centered"><strong>4</strong></div>
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
