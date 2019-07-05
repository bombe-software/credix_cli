import React from 'react';
import { graphql } from 'react-apollo';

import resultado from './../../queries/solicitud';


class Resultados extends React.Component {

    render() {
        if (this.props.data.loading) return (<div>Loading...</div>)
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
