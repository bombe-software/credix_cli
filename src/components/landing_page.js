import React, {Component } from 'react';
import { graphql } from 'react-apollo';

//queries
import nullname from './../queries/nullname';

class LandingPage extends Component {
  
    render() {
      if (this.props.data.loading) { return (<div>Loading...</div>); }
      console.log(this.props.data.nullnames);
      return(
      <div>Hola! Soy la landing page Un gusto</div>
      );
    }
}
 
export default graphql(nullname)(LandingPage);
  