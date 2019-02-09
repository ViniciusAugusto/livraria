using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Livros
{
    public class Livro
    {
        public Livro(string titulo, string autor, string editora, int ano)
        {
            Titulo = titulo;
            Autor = autor;
            Editora = editora;
            Ano = ano;
        }

        public Livro(int id, string titulo, string autor, string editora, int ano) : this (titulo, autor, editora, ano)
        {
            Id = id;
        }

        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Editora { get; set; }
        public int Ano { get; set; }
    }
}
