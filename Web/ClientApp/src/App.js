import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Livros } from './components/Livros';
import { Cadastro } from './components/Cadastro';
import { Editar } from './components/Editar';
import { Counter } from './components/Counter';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/livros' component={Livros} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/editar/:id' component={Editar} />
      </Layout>
    );
  }
}
