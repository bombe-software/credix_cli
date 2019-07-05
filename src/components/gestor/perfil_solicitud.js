import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import solicitud from "./../../queries/solicitud";
import WaveBackground from '../reutilizables/wave_background';

class PerfilSolicitud extends Component {

    render() {
        if (this.props.data.loading) return (<div>Loading..</div>)
        if(!this.props.data.solicitud) {  return<div>No existe este usuario</div>}
        const solicitud = this.props.data.solicitud;
        return (
            <div>
                <section className="hero is-large">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-6-desktop is-10-tablet is-offset-3-desktop is-offset-2-tablet">
                                <div className="box" style={{ padding: "48px" }}>
                                    <h1 className="is-size-2 has-text-weight-semibold	 has-text-centered">
                                        {solicitud.cantidad}
                                    </h1>
                                  
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

export default graphql(solicitud, {
    options: (props) => { return { variables: { id: props.match.params.id } } }
})(PerfilSolicitud);
