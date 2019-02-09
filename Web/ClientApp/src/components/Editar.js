import React, { Component } from 'react';
import Api from '../Api';

export class Editar extends Component {
  displayName = Editar.name

  constructor(props) {
    super(props);

    this.onChangeTitulo = this.onChangeTitulo.bind(this);
    this.onChangeAutor = this.onChangeAutor.bind(this);
    this.onChangeEditora = this.onChangeEditora.bind(this);
    this.onChangeAno = this.onChangeAno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        Titulo: '',
        Autor: '',
        Editora:'',
        Ano: ''
    }
  }

  componentDidMount() {
    Api.get(`api/livros/${this.props.match.params.id}`)
        .then((data) => {
            this.setState({
                Titulo: data.titulo,
                Autor: data.autor,
                Editora: data.editora,
                Ano: data.ano
            });
        })
  }

  onChangeTitulo(e) {
    this.setState({
        Titulo: e.target.value
    });
  }

  onChangeAutor(e) {
    this.setState({
        Autor: e.target.value
    });
  }

  onChangeEditora(e) {
    this.setState({
        Editora: e.target.value
    });
  }

  onChangeAno(e) {
    this.setState({
        Ano: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    Api
    .put(`api/livros/${this.props.match.params.id}`, JSON.stringify(this.state))
    .then((r) => {
    })
    .catch((e) => console.log(e))
    this.props.history.push('/livros')
  }

  render() {
    return (
        <div style={{marginTop: 10}}>
            <h3>Editar Livro</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Titulo:  </label>
                    <input 
                     type="text" 
                     className="form-control"
                     value={this.state.Titulo}
                     onChange={this.onChangeTitulo}
                    />
                </div>
                <div className="form-group">
                    <label>Autor: </label>
                    <input 
                     type="text" 
                     className="form-control"
                     value={this.state.Autor}
                     onChange={this.onChangeAutor}
                    />
                </div>
                <div className="form-group">
                    <label>Editora: </label>
                    <input 
                     type="text" 
                     className="form-control"
                     value={this.state.Editora}
                     onChange={this.onChangeEditora}
                    />
                </div>
                <div className="form-group">
                    <label>Ano: </label>
                    <input 
                     type="number" 
                     className="form-control"
                     value={this.state.Ano}
                     onChange={this.onChangeAno}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Editar" className="btn btn-success"/>
                </div>
            </form>
        </div>
    );
  }
}
