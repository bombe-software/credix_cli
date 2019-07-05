import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Apollo configuration object options
import { split } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { createHttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { api, ws } from './../config/variables';

//Base
import LandingPage from './landing_page';
import AcercaDe from './acerca_de';
import FAQ from './FAQ';
import Ayuda from './ayuda';
import Login from './login/login';
import Test from './test_credito/test_form';
import NotFound from './reutilizables/not_found';
import Navbar from './reutilizables/navbar';
import Footer from './reutilizables/footer';
//registro
import Registro from './registro/registro';
import Token from './institucion/tokenGenerator';
import Validacion from './registro/validacion';
import RegistroGestor from './registro/registro_gestor';

//Gestor
import Solicitud from './gestor/solicitud_credito';
<<<<<<< HEAD
import Clientes from './gestor/clientes';
import PerfilC from './gestor/perfil_cliente';
=======
import Solicitud2 from './gestor/solicitud';
>>>>>>> 08a286549ec06ab7464acaade03dcd02efad1213

// Crear el link
const httpLink = createHttpLink({
  uri: `${api}/graphql`,
  credentials: 'include'
});

// Crear el web socket link
const wsLink = new WebSocketLink({
  uri: `${ws}/subscriptions`,
  options: {
    reconnect: true
  }
});

// USar dependencia split para hacer una union de ambos 
// caminos de comunicacion y separa uno del otro
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});


class App extends Component {

  render() {
    return (
      <ApolloProvider client={client} >
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/acerca_de" component={AcercaDe} />
            <Route path="/FAQ" component={FAQ}/>
            <Route path="/ayuda" component={Ayuda}/>
            <Route path="/solicitud_credito/:id" component={Test} />
            
            <Route path="/registro/:token" component={Registro} />
            <Route path="/registro" component={Registro} />
            <Route path="/registro_gestor" component={RegistroGestor} />
            <Route path="/generarToken" component={Token} />
            <Route path="/solicitud_credito" component={Solicitud} />
            <Route path="/validacion" component={Validacion} />
            <Route path="/clientes/:id" component={PerfilC} />
            <Route path="/clientes" component={Clientes} />
            <Route path="/solicitud" component={Solicitud2} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
