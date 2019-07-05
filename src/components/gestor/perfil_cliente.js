import React from 'react';
import GenericForm from '../reutilizables/generic_form';
import { graphql } from 'react-apollo';
import cliente from "./../../queries/cliente";
import WaveBackground from '../reutilizables/wave_background';
import { Link } from 'react-router-dom'


class Perfil extends GenericForm {

    constructor(props) {
        super(props);
        this.renderSolicitudes = this.renderSolicitudes.bind(this);
        this.renderStatus = this.renderStatus.bind(this);
    }

    renderStatus(status) {
        if (status) {
            if (status === "Aprobado")
                return (
                    <div>
                        <span className="icon has-text-info">
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                        </span> Aprobado
            </div>
                );
        } if (status === "Rechazado")
            return (
                <div>
                    <span className="icon has-text-warning">
                        <i className="fa fa-minus-circle" aria-hidden="true"></i>
                    </span> Rechazado
            </div>
            );
        else return <div>unkown</div>
    }

    renderSolicitudes() {
        return this.props.data.cliente.solicitud.map(({ id, cantidad, status }) => {
            return (
                <div className="menu" key={id}>
                    <ul className="menu-list">
                        <li key={id}>
                            <Link to={`${this.props.location.pathname}/solicitud/${id}`}  params={{ testvalue: "hello" }}>{cantidad}&nbsp;&nbsp;&nbsp;  {this.renderStatus(status)} </Link>
                        </li>
                    </ul>
                </div>
            );
        });

    }

    render() {
        if (this.props.data.loading) return (<div>Loading..</div>)
        const cliente = this.props.data.cliente;
        console.log(this.props);
        return (
            <div>
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                                <div className="box" style={{ padding: "48px" }}>
                                    <h1 className="is-size-2 has-text-weight-semibold	 has-text-centered">
                                        {cliente.nombre}
                                    </h1>
                                    <br />
                                    <p className="subtitle">
                                        <strong>Edad:</strong> {cliente.edad}
                                    </p>
                                    <p className="subtitle">
                                        <strong>Domicilio:</strong> {cliente.domicilio}
                                    </p>
                                    <p className="subtitle">
                                        <strong>CURP: </strong> {cliente.curp}
                                    </p>
                                    <p className="subtitle">
                                        <strong>RFC: </strong>{cliente.rfc}
                                    </p>
                                    <p className="subtitle">
                                        <strong>Solicitudes:</strong> {cliente.solicitud}
                                    </p>
                                    <br />
                                    {this.renderSolicitudes()}
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

export default graphql(cliente, {
    options: (props) => { return { variables: { id: props.match.params.id } } }
})(Perfil);
