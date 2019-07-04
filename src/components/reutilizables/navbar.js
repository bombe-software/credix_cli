import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            isUserSelected: false
        };
        this.logout = this.logout.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderNavEnd = this.renderNavEnd.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    logout() {
        this.props.mutate({
            // refetchQueries: [{ query: usuario_in }]
        });
    }
    renderNavEnd() {
        if (true) {
            return (
                <div>
                    <div className="navbar-item ">
                        <Link to="/validacion" className="navbar-item">
                            <button className="button is-info">
                                <strong>Registrate</strong>
                            </button>
                        </Link>
                        <Link to="/login" className="navbar-item">
                            <button className="button is-primary">
                                <strong>Iniciar sesión</strong>
                            </button>
                        </Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <div className="navbar-item is-light has-dropdown is-hoverable" onClick={this.handleClick}>
                                <Link to="/config_cuenta" className="navbar-item">@ola</Link>
                                <div className="navbar-dropdown is-right">
                                    <Link to="/config_cuenta" className="navbar-item">Configuración de la cuenta</Link>
                                    <Link to="/" className="navbar-item" onClick={this.logout}>Cerrar sesión</Link>
                                </div>
                            </div>
                            <div className="navbar-item">
                                {/* <img src={`../../assets/img/${this.props.data.usuario_in.avatar}.png`} height="28" width="28" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className='is-light'>
                <nav className="navbar is-transparent ">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img src="../../assets/img/credix.png" alt="credix"  />
                        </Link>

                        <div className={this.state.isToggleOn ? 'navbar-burger burger is-active' : 'navbar-burger burger'} data-target="nav-demos-menu" onClick={this.handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="nav-demos-menu" className={this.state.isToggleOn ? 'navbar-menu is-active' : 'navbar-menu'}>
                        <div className="navbar-start">
                            <div className="navbar-item">
                                <Link to="/" className="navbar-item" onClick={this.handleClick}>
                                    Home&nbsp;&nbsp;
                                 <span className="icon has-text-info">
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                    </span>
                                </Link>
                                <Link to="/ayuda" className="navbar-item" onClick={this.handleClick}>
                                    Ayuda&nbsp;&nbsp;
                                 <span className="icon has-text-primary">
                                        <i className="fa fas fa-question" aria-hidden="true"></i>
                                    </span>
                                </Link>
                                <Link to="/acerca_de" className="navbar-item" onClick={this.handleClick}>
                                    Acerca de &nbsp;&nbsp;
                                 <span className="icon has-text-danger">
                                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    </span>
                                </Link>
                                <Link to="/FAQ" className="navbar-item" onClick={this.handleClick}>
                                    FAQ &nbsp;&nbsp;
                                 <span className="icon has-text-link">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </Link>
                               
                            </div>
                        </div>
                        <div className="navbar-end">
                            {this.renderNavEnd()}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;