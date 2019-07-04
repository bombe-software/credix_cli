import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//queries

class LandingPage extends Component {

  render() {
    return (
      <div>
        <section className="hero is-fullheight is-medium is-primary is-bold has-background">
          <img src="img/prestamo.jpg" className="hero-background is-transparent" alt="prestamo"></img>
          <div className="hero-body">
            <div className="container">
              <h1 className="is-size-1 has-text-weight-semibold	">
                Credix
              </h1>
              <h2 className="is-size-4 has-text-weight-medium">
                Ponga aprueba la capacidad de su cliente para otorgar un credito
              </h2>
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="hero-body hero-body-hp-main is-danger">
            <div className="container">
              <div className="columns">
                
                <div className="column is-6">
                  <img src="../../assets/img/interview.jpg" alt='imageload' />
                </div>
                <div className="column is-6 has-text-centered">
                  <h1 className=" has-text-right title is-size-1-desktop is-size-2-tablet is-size-3-mobile comparaPadUp has-text-left">
                      Test de crédito
                  </h1>
                  <h2 className="subtitle hp-subtitle has-text-justified">
                    <br />
                    Mediante la aplicación de algunas preguntas al cliente que busca el crédito,
                    y claro, un algoritmo de análisis, sabrá si esta persona es candando para un
                    préstamo de crédito...
                    <strong>una gran herramienta </strong>¿no lo crees?
                  </h2>
                  <br />
                  <span className="is-size-3 has-text-succeess has-text-centered">Ante todo profesionalismo y confiabilidad </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      <hr/>
        <section className="hero">
          <div className="hero-body hero-body-hp-main is-danger">
            <div className="container">
              <div className="columns">
                <div className="column is-6">
                  <h1 className="title is-size-1-desktop is-size-2-tablet is-size-3-mobile comparaPadUp has-text-left">
                    Reconomiento facial
                  </h1>
                  <h2 className="subtitle hp-subtitle has-text-left">
                    <br />
                   Identifique mediante el uso de IA para el reconocimienteo facial si el cliente
                   que esta pidiento el credito tiene un comportamiento adecuado.<br/>
                   Nuesto algoritmo es capaz identificar entre otras cosas:
                  <br/>  <br/>
                  <strong> 
                    - Estado emocional <br/>
                    - Gestos anormales <br/>
                    - Patrones de nerviosismo <br/>
                  </strong> <br/>  <br/>
                  con la finalidad de evaluar sus gestos y tener un indice que indique
                  si es capaz de <strong> ser candidanto </strong> para el crédito. 
                  </h2>
                  <br/>
                  <Link to='/validacion'>
                    <button className="button buttonGo is-medium is-danger is-centered">
                      ¡Regístrate ahora mismo!
                    </button>
                  </Link>
                  <br/>
                </div>
                <div className="column is-6">
                <figure className="image image is-5by4	">
                  <img src="../../assets/img/reco_facial.png"  alt='imageload' />
                </figure>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box notification is-info">
                <p className="title has-text-centered">Usamos IA</p>
                <p className="subtitle"></p><br/>
                <div className="content has-text-centered">
                  Con la ayuda de nuesta IA podemos detectar
                  patrones faciales que puedan permitir la detección de su estado al contestar nuestro test.
                </div>
                <figure className="image container imagen ">
                  <img src="../../assets/img/ia.png" alt="joven"></img>
                </figure>
              </div>
              </div>
              <div className="tile is-child box notification is-primary">
                <p className="title has-text-centered">Otorga créditos</p>
                <p className="subtitle"></p><br/>
                <div className="content has-text-centered">
                  Nuestro test le ayudara a saber si sus clientes son aptos para recibir un crédito y con ello
                  llevar un registro de ellos para tener un mejor control.
                </div>
                <figure className="image container imagen2">
                  <img src="../../assets/img/card.png" alt="credito"></img>
                </figure>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box notification is-info">
                  <p className="title has-text-centered">Alternativa confiable</p>
               
                  <div className="content has-text-centered">
                  Buscamos ser una opción para que la decisión de otorgar un crédito a una persona sea
                  más sencilla de tomar.
                </div>
                <figure className="image container imagen3">
                  <img src="../../assets/img/intersection.png" alt="decision"></img>
                </figure>
                </div>
              </div>
            </div>
        </section>
      </div>
        );
      }
    }
    
    export default  LandingPage;
