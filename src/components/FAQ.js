import React, { Component } from 'react';
import WaveBackground from './reutilizables/wave_background';

class FAQ extends Component {

    render() {
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Preguntas frecuentes
                    </h1>
                        </div>
                    </div>
                </section>
                <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <article className="message is-info">
                                <div className="message-header">
                                    <p>Pregunta 1</p>
                                    <button className="delete" aria-label="delete"></button>
                                </div>
                                <div className="message-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <span>felis venenatis</span> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                </div>
                            </article>
                        </div>
                        <div className="column">
                            <article className="message is-info">
                                <div className="message-header">
                                    <p>Pregunta 2</p>
                                    <button className="delete" aria-label="delete"></button>
                                </div>
                                <div className="message-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <span>felis venenatis</span> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                </section>
                <WaveBackground/>
            </div>
        );
    }
}

export default FAQ;
