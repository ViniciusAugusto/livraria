import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

export class Livros extends Component {
  displayName = Livros.name

  constructor(props) {
    super(props);
    this.state = { livros: [], loading: true };
  }

  componentDidMount () {
    this.loadLivros()
  }

  loadLivros () {
    Api
    .get('api/livros')
    .then((data) => {
      this.setState({
        livros: data,
        loading: false
      })
    })
  }

  remove (id) {
    if(window.confirm('deseja realmente apagar esse livro?')) {
      Api.delete(`api/livros/${id}`)
        .then((r) => {
          this.loadLivros()
        })
        .catch((e) => console.log(e))
    }
  }


  render() {
    let contents = this.state.loading
      ? <p><em>Carregando...</em></p>
      :  <table className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Editora</th>
          <th>Ano</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {this.state.livros.map(livro =>
          <tr>
            <td>{livro.id}</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>{livro.editora}</td>
            <td>{livro.ano}</td>
            <td>
              <Link to={"/editar/"+livro.id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
              <button onClick={() => { this.remove(livro.id) }} className="btn btn-danger">Remover</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>;

    return (
      <div>
        <h1>Gerencimento de Livros</h1>
        {contents}
      </div>
    );
  }
}
