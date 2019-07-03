import React, { Component } from 'react';
import LoginForm from './login_form';

class Login extends Component {
     render() {
        return(
        <div>
            <LoginForm props={this.props} />
        </div>
        );
    }
}
 
export default Login;
  