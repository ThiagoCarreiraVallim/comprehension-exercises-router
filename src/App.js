import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './components/StrictAcess';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const usersId = `/users/${Math.round(Math.random() * 30)}`;
    const name = 'joao';
    const senha = '1234';
    return (
      <BrowserRouter>
        <Link to="/about">About</Link>
        <Link to={usersId}>Users</Link>
        <Link to="/strict$acess">Acesso Restrito</Link>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/users/:id" render={ (props) => <Users {...props} greetingMessage="Fala ai" /> } />
          <Route path="/strict$acess" render={ () => <StrictAcess name={ name } senha={ senha } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
