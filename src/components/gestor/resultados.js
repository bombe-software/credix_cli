import React from 'react';
import { graphql } from 'react-apollo';

import resultado from './../../queries/solicitud';

import * as tf from '@tensorflow/tfjs';

const model = tf.loadLayersModel('http://localhost:3000/model12/model.json');


class Resultados extends React.Component {

    render() {
        if (this.props.data.loading) return (<div>Loading...</div>);
        console.log(this.props.data.solicitud)
        return (
            <div>
                Esto serian los resultados y la prediccion del test
            </div>
        );
    }
}

export default graphql(resultado, {
    options: (props) => { return { variables: { id: props.match.params.id } } }
  })(Resultados);
