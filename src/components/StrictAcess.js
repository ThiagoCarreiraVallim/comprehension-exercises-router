import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Home from './Home';

class StrictAcess extends React.Component {
  render() {
    const { name, senha } = this.props;

    let login = <div><h3>Area Restrita!</h3><h4>Welcome {name}!</h4></div>;

    if (name !== 'joao' && senha !== '1234') {
      login = <Redirect to="/" />;
      window.alert('Usuário e senha incorretos');
    }
    return (
      <BrowserRouter>
        { login }
        <Route exact path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}

export default StrictAcess;
