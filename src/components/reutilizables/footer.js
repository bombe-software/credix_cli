import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  /**
  * Es una forma de capturar cualquier error en la clase 
  * y que este no crashe el programa, ayuda con la depuracion
  * de errores
  * @method componentDidCatch
  * @const info Es más informacion acerca del error
  * @const error Es el titulo del error
  */
  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Info: " + info);
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container footer-override">
            <div className="columns mobile">
              <div className="column is-3 is-offset-1 is-10-mobile is-offset-1-mobile">
                <Link to="/">
                  <img src="../../../assets/img/credix.png" alt="credix" width="112" height="30" />
                </Link>
                <br /><br />
                <p>
                  <Link to="/">Inicio</Link>
                </p>
                <p>
                  <Link to="/login">Login</Link>
                </p>
                <p>
                  <Link to="/registro">Registro</Link>
                </p>
                <p>
                  <Link to="/ayuda">Ayuda</Link>
                </p>
                <p>
                  <Link to="/acerca_de">Acerca de</Link>
                </p>
                <p>
                  <Link to="/FAQ">FAQ</Link>
                </p>
              </div>
              <div className="column is-3 is-10-mobile is-offset-1-mobile">
                <a href="http://www.bombesoftware.com" target="_blank" rel="noopener noreferrer">
                  <img src="../../assets/img/bombe-text-logo.png" alt="Bombe" width="112" height="28" />
                </a>
                <br /><br />
                <p>
                  <a href="http://www.bombesoftware.com/" target="_blank" rel="noopener noreferrer">Bombe Software</a>
                </p>
                <p>
                  <a href="http://www.bombesoftware.com/about.html" target="_blank" rel="noopener noreferrer">Acerca de</a>
                </p>
                <p>
                  <a href="http://www.bombesoftware.com/services.html" target="_blank" rel="noopener noreferrer">Servicios</a>
                </p>
                <p>
                  <a href="http://www.bombesoftware.com/contact.php" target="_blank" rel="noopener noreferrer">Contacto</a>
                </p>
                <hr />
                <p>
                  {/* eslint-disable-next-line */}
                  <a href="http://www.bombesoftware.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-globe" aria-hidden="true"></i></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                {/* eslint-disable-next-line */}
                  <a href="https://www.facebook.com/bombesoftware" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                {/* eslint-disable-next-line */}
                  <a href="https://twitter.com/bombesoftware" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                {/* eslint-disable-next-line */}
                  <a href="https://instagram.com/bombesoftware" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>

                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;