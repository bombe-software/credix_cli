import React from 'react';
import { graphql } from 'react-apollo';
import GenericForm from '../reutilizables/generic_form';

import clientes from './../../queries/clientes';
import WaveBackground from '../reutilizables/wave_background';

class Cliente extends GenericForm {

    constructor(props) {
        super(props);
        this.renderClientes = this.renderClientes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateSearch = this.updateSearch.bind(this)
        this.state = {
            cliente: ""
        }
    }

    updateSearch({ cliente }) {
        return (() => {
            this.setState({
                cliente
            });
        })
    }

    renderClientes() {
        return this.props.data.clientes.map(({ id, nombre, clientes }) => {
            return (
                <div className="menu" key={id}>
                     <ul className="menu-list">
                    <li key={id}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a
                            onClick={this.updateSearch({ cliente: id })}
                        // className={this.getActive({ estado: id })} 
                        >{nombre}
                        </a>
                    </li>
                    </ul>
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
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                                <div className="box" style={{ padding: "48px" }}>
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