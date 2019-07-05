import React from 'react';
import { graphql } from 'react-apollo';
import GenericForm from '../reutilizables/generic_form';
import { Link } from 'react-router-dom';

import clientes from './../../queries/clientes';
import WaveBackground from '../reutilizables/wave_background';

class Cliente extends GenericForm {

    constructor(props) {
        super(props);
        this.renderClientes = this.renderClientes.bind(this);
    }

    renderClientes() {
        return this.props.data.clientes.map(({ id, nombre, rfc }) => {
            return (
                <div className="menu" key={id}>
                    <ul className="menu-list">
                        <li key={id}>
                            <Link to={`clientes/${id}`}>{nombre}&nbsp;&nbsp;&nbsp; {rfc}</Link>
                        </li>
                    </ul>
                </div>
            );
        });
    }


    render() {
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
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet has-text-centered">
                                <div className="box has-text-centered" style={{ padding: "48px" }}>
                                    <div className="has-text-centered title">Clientes registrados</div>
                                    {this.renderClientes()}

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

export default graphql(clientes)(Cliente);