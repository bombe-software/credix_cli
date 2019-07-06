import React from 'react';
import { graphql } from 'react-apollo';
import GenericForm from '../reutilizables/generic_form';
import { Link } from 'react-router-dom';

import gestores from './../../queries/gestores';
import WaveBackground from '../reutilizables/wave_background';

class ManageGestores extends GenericForm {

    constructor(props) {
        super(props);
        this.renderGestores = this.renderGestores.bind(this);
    }

    renderGestores() {
        return this.props.data.gestores.map(({ id, usuario }) => {
            return (
                <div className="menu" key={id}>
                    <ul className="menu-list">
                        <li key={id}>
                            <Link to={`/manage_gestores/${id}`}><strong>Nombre: </strong>{usuario.nombre}</Link>
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
                                Manejo de Gestores de Banco
                            </h1>
                            <h2 className="subtitle">
                                A continuación, usted podrá ver los gestores de banco que tiene registrado a su institución. Puede eliminarlos si lo considiera
                                por cualquier motivo.
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet has-text-centered">
                                <div className="box has-text-centered" style={{ padding: "48px" }}>
                                    <div className="has-text-centered title">Gestores de banco</div>
                                    {this.renderGestores()}
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

export default graphql(gestores)(ManageGestores);