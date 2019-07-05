import React from 'react';
import { graphql } from 'react-apollo';

import creditos from './../../queries/creditos';
import aprobarDenegar from './../../mutations/update/aprobar_denegar';


class AprobarCreditos extends React.Component {

    handleClick(status, id){
        this.props.mutate({
            variables: { status, id },
            refetchQueries: [{ query: creditos }]
        }).catch((res) => {
            if (res.graphQLErrors) {
                const errors = res.graphQLErrors.map(error => error.message);
                const error = errors[0];
                this.setState({ error });
            }
        })
    }

    render() {
        if (this.props.data.loading) return (<div>Loading...</div>)
        return (
            <div className='container'>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Candidatos a creditos
                            </h1>
                            <h2 className="subtitle">
                                Por favor revise los posibles candidatos 
                            </h2>
                        </div>
                    </div>
                </section>

                {this.props.data.solicitudes_gestor.map(credito => {
                    console.log(credito.status)
                    if(credito.status == 'Pendiente'){
                        return (
                            <div className="box" key={credito.id}>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Puntaje en la apicacion: </strong> <small>{credito.id}</small>
                                                <br />
                                                Nombre de la persona: {credito.id}
                                            </p>
                                            <div className="level-left">
                                                <button className="button is-fullwidth is-success is-outlined" onClick={()=>this.handleClick('Aprobada', credito.id)}>Aceptar</button>
    
                                                <button className="button is-fullwidth is-danger is-outlined" onClick={()=>this.handleClick('Negada', credito.id)}>Denegar</button>
                                            </div>
                                        </div>
    
                                    </div>
                                </article>
                            </div>
                        );
                    }else{
                        return "";
                    }
                    
                })}
            </div>
        );
    }
}

export default graphql(aprobarDenegar)(graphql(creditos)(AprobarCreditos));
