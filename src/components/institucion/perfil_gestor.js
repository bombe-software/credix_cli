import React from 'react';
import GenericForm from '../reutilizables/generic_form';
import { graphql } from 'react-apollo';
import gestor from "./../../queries/gestor";
import deleteGestor from "./../../mutations/delete/gestor";
import WaveBackground from '../reutilizables/wave_background';

class PerfilG extends GenericForm {

    constructor(props) {
        super(props);
        this.deleteGestor = this.deleteGestor.bind(this);
        this.delete = React.createRef();
        this.state = {
            verificar: 0,
            valid: ""
        }
    }

    deleteGestor(id) {

        this.state.verificar++;
        if (this.state.verificar === 1) {
            this.setState({ valid: "Si está seguro, vuelva a oprimir el botón" });
        } else
        {
            this.props.mutate({
                variables:{
                    gestor: this.props.data.gestor.id
                }
            }).then(()=>{this.props.history.push({
                pathname: `manage_gestores/`,
                state: { sucess: true }
            })})
        }
    }

    render() {
        if (this.props.data.loading) return (<div>Loading..</div>)
        if (!this.props.data.gestor) { return <div>No existe este gestor</div> }
        const gestor = this.props.data.gestor;
        console.log(this.props);
        return (
            <div>
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                                <div className="box" style={{ padding: "48px" }}>
                                    <h1 className="is-size-2 has-text-weight-semibold	 has-text-centered">
                                        Perfil del gestor
                                            </h1>
                                    <br />
                                    <p className="subtitle">
                                        <strong>Nombre completo: </strong>{gestor.usuario.nombre}
                                    </p>
                                    <p className="subtitle">
                                        <strong>Nombre de usuario: @</strong>{gestor.usuario.nombre_usuario}
                                    </p>
                                    <p className="subtitle">
                                        <strong>Correo electróncico registrado: </strong> {gestor.usuario.email}
                                    </p>
                                    <p className="subtitle">
                                        <strong>Sexo: </strong>{gestor.usuario.sexo}
                                    </p>
                                    <p className="subtitle">
                                        <strong>Status: </strong>{gestor.status}
                                    </p>
                                    <div className="has-text-right-desktop-only">
                                        <div>
                                            <button ref={this.delete} className="button is-danger" onClick={this.deleteGestor}><strong>Eliminar gestor</strong></button>
                                        </div>
                                        <div>
                                            <br />
                                            {this.state.valid ? <code>{this.state.valid}</code> : ""}
                                        </div>
                                    </div>
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

export default graphql (deleteGestor)(graphql(gestor, {
    options: (props) => { return { variables: { id: props.match.params.id } } }
})(PerfilG));