import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RegistroCompleto extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p className="title">
                        Registro completo!
                    </p>
                    <p className="subtitle">
                        Ahora puede iniciar sesion
                </p>
               <Link to={`/login`}><button className="button is-primary"> Inicia sesion </button></Link>
                </div>
            </div>
        );
    }
}

export default RegistroCompleto;