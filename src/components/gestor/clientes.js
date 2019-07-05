import React from 'react';
import { graphql } from 'react-apollo';
import GenericForm from '../reutilizables/generic_form';

import clientes from './../../queries/clientes';

class Cliente extends GenericForm {

    constructor(props) {
        super(props);
        this.renderClientes = this.renderClientes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            cliente: ""
        }
    }

    updateSearch({ id, nombre }) {

        return (() => {
            this.setState({
                nombre
            });
        })
    }

    renderClientes() {
        return this.props.data.clientes.map(({ id, nombre, clientes }) => {
            // console.log(id, nombre)
            return (
                <div key={id}>
                    <li key={id}>
                        <a
                            onClick={this.updateSearch({ estado: id })}
                        // className={this.getActive({ estado: id })} 
                        >{nombre}
                        </a>
                    </li>
                </div>
            );
        });

    }


    async onSubmit(values) {

    }
    render() {
        console.log(this.state);
        if (this.props.data.loading) return (<div>Loading...</div>)
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Registro de cliente
                            </h1>
                            <h2 className="subtitle">
                                A continuación, se les mostrara los clientes que ha registrado con sus solicitudes hechas a usted.
                            </h2>
                        </div>
                    </div>
                </section>
                {this.renderClientes()}
            </div>
        );
    }
}

export default graphql(clientes)(Cliente);