import React, { Component } from 'react';
import WaveBackground from './reutilizables/wave_background';

class AcercaDe extends Component {

    render() {
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Acerca de
                    </h1>
                        </div>
                    </div>
                </section>
                <div className="box has-text-centered">Equipo de trabajo que desarrolló <strong>credix</strong></div>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src="/img/acerca_de/vicroni.jpg" alt="Vicroni"></img>
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Saúl González</p>
                                            <p className="subtitle is-6">@Vicroni</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        Front-end and Back-end programmer @Vicroni
                                        #UPIITA #IPN
                                        <br></br>
                                        Member of Bombe Software
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src="/img/acerca_de/medina_villa.jpg" alt="MedinaVilla"></img>
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Jesús Medina</p>
                                            <p className="subtitle is-6">@MedinaVilla</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        Front-end and Back-end programmer @MedinaVilla
                                        #ESCOM #IPN
                                        <br></br>
                                        Member of #Bombe Software
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src="/img/acerca_de/ruben_hdez.jpg" alt="Ruben35"></img>
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Rubén Hdez.</p>
                                            <p className="subtitle is-6">@Ruben35</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        Front-end and Back-end programmer @Ruben35.
                                        #ESCOM #IPN
                                        <br></br>
                                        Member of #Bombe Software
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src="/img/acerca_de/CGA.jpg" alt="HGWells07"></img>
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-5">Carlos Anguiano</p>
                                            <p className="subtitle is-6">@HGWells07</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        Designer and Front-end programmer @HGWells07
                                        #ESFM #IPN
                                        <br></br>
                                        Member of #Bombe Software
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="container">
                        <div className="notification has-text-centered">
                            <a href="http://www.bombesoftware.com/about.html" target="_blank" rel="noopener noreferrer">
                                <img width="112" height="28" src="/assets/img/bombe-text-logo.png" alt="Bombe"></img><br></br>
                                <p className="title is-5">Team</p>
                            </a>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="box has-text-centered">Tecnologías con las que se desarrolló <strong>credix</strong></div>
                
                <br></br>
                <WaveBackground />
            </div>
        );
    }
}

export default AcercaDe;
