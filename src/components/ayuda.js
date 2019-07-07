import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Ayuda extends Component {

    render() {
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Tecnologias
                    </h1>
                        </div>
                    </div>
                </section><br />
                <div className="box has-text-centered">Tecnologías con las que se desarrolló <strong>credix</strong></div>
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <article className="is-child box">
                                <p className="title has-text-centered">IBM Watson</p>
                                <p className="subtitle has-text-centered">Inteligencia Artificial </p>
                                <figure className="image container is-128x128">
                                    <img src="/assets/img/watson.jpg" alt="node.js"></img>
                                </figure><br></br>
                                <p className="has-text-centered">Capaz de responder a preguntas formuladas en lenguaje natural mediante la modelación de redes neuronales</p>
                            </article>
                        </div>

                        <div className="tile is-parent">
                            <article className="is-child box">
                                <p className="title has-text-centered">Visual Recognition</p>
                                <p className="subtitle has-text-centered">Lenguaje de programación comunmente utilizado para IA</p>
                                <figure className="image container is-128x128">
                                    <img src="/assets/img/visual.png" alt="python"></img>
                                </figure>
                                <p className="has-text-centered">
                                    Etiquetar, clasificar y capacitar de forma rápida y precisar el contenido visual mediante el aprendizaje automático.</p>
                            </article>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <article className="is-child box">
                                <p className="title has-text-centered">Node.js</p>
                                <p className="subtitle has-text-centered">Entorno de ejecución de JavaScript </p>
                                <figure className="image container is-128x128">
                                    <img src="/img/acerca_de/nodejs.png" alt="node.js"></img>
                                </figure><br></br>
                                <p className="has-text-centered">La principal base del proyecto para poder realizar diversas de sus acciones</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="is-child box">
                                <p className="title has-text-centered">React</p>
                                <p className="subtitle has-text-centered">Biblioteca de JavaScript para construir interfaces de usuario</p>
                                <figure className="image container is-128x128">
                                    <img src="/img/acerca_de/react.png" alt="react"></img>
                                </figure>
                                <p className="has-text-centered">Parte fundamental para realizar una UI bien organizada y facilitandonos el desarrollo</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="is-child box">
                                <p className="title has-text-centered">Python</p>
                                <p className="subtitle has-text-centered">Lenguaje de programación comunmente utilizado para IA</p>
                                <figure className="image container is-128x128">
                                    <img src="/img/acerca_de/python.png" alt="python"></img>
                                </figure>
                                <p className="has-text-centered">Motor de todas nuestras herramientas que hacen uso de la IA</p>
                            </article>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default Ayuda;
