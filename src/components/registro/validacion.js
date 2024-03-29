import React from 'react';
import GenericForm from '../reutilizables/generic_form';
import { Link } from "react-router-dom";
import WaveBackground from '../reutilizables/wave_background';

class Registro extends GenericForm {
    render() {
        return (
            <div>
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                                <div className="box" style={{ padding: "48px" }}>
                                    <br />
                                    <h1 className="title has-text-centered is-italic">
                                        Forma de registro
                    </h1>
                                    <br />
                                    <p className="subtitle has-text-centered">
                                        Recuerde que en caso de querer registrarse como gestor de créditos, usted debe de tener una
                                        clave que debe ser proporcionado por el encargado de la institución crediticia en donde usted labora.
                    </p>
                                    <br />
                                    <Link className="button is-fullwidth is-info" to="/registro/">
                                        <strong>Tengo una institución crediticia</strong>
                                    </Link>
                                    <br />
                                    <Link className="button is-fullwidth is-primary" to="/registro_gestor">
                                        <strong>Tengo un código para registrarme como gestor</strong>
                                    </Link>
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

export default Registro;
