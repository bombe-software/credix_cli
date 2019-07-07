import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import addSolicitud from './../../mutations/add/solicitud';
import usuario_in from './../../queries/usuario';

class Solicitud2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_test: this.props.match.params.id_test,
            id_cliente: this.props.match.params.id_cliente,
            monto: this.props.match.params.monto
        };
    }

    
    componentDidUpdate() {
        console.log("yip")
        if (!this.props.data.loading) {
            console.log(this.props)
            this.props.mutate({
                variables: {
                    cantidad: parseInt(this.state.monto),
                    cliente: this.state.id_cliente,
                    gestor: this.props.data.usuario.id,
                    test: this.state.id_test
                }
            }).then((sol)=> this.props.history.push(`/resultados/${sol.data.addSolicitud.id}`))
            .catch(err=> console.log(err))

        }

    }

    render() {
        if (this.props.data.loading) return (<div>Loading...</div>)
        return (
            <div>
                Loading..
            </div>
        );
    }
}

export default graphql(addSolicitud)(graphql(usuario_in)(Solicitud2));
