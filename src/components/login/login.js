import React, { Component } from 'react';
import LoginForm from './login_form';
import SnackBar from "./../reutilizables/genericSnackBar";

class Login extends Component {

  renderSuccessSnackBar() {
    let sucess = this.props.location.state;
    let pop = this.props.history.action;
    if (sucess && pop === "PUSH") {
      return (<SnackBar />)
    }
  }

  render() {
    return (
      <div>
        <LoginForm props={this.props} />
        {this.renderSuccessSnackBar()}
      </div>
    );
  }
}

export default Login;
