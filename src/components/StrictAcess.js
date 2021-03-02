import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Home from './Home';

class StrictAcess extends React.Component {
  render() {
    const { name, senha } = this.props;
    let login = <p>Welcome {name}!</p>;
    if (name !== 'joao' & senha !== '1234') {
      window.alert('Usuário e senha incorretos');
      login = <Redirect to="/" />;
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
