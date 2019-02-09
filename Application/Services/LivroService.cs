using Application.Interfaces;
using Application.ViewModels;
using Domain.Livros;
using Domain.Livros.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Services
{
    public class LivroService : ILivroService
    {
        private ILivroRepository repository;
        public LivroService(ILivroRepository repository)
        {
            this.repository = repository;
        }

        private Livro Convert(LivroViewModel livroViewModel)
        {
            return new Livro(livroViewModel.Id??0, livroViewModel.Titulo, livroViewModel.Autor, livroViewModel.Editora, livroViewModel.Ano??0);
        }

        private LivroViewModel Convert(Livro livro)
        {
            return new LivroViewModel()
            {
                Id = livro.Id,
                Titulo = livro.Titulo,
                Autor = livro.Autor,
                Editora = livro.Editora,
                Ano = livro.Ano
            };
        }

        public void AdicionarLivro(LivroViewModel livroViewModel)
        {
            var livro = Convert(livroViewModel);
            repository.Save(livro);
            repository.SaveChanges();
        }

        public void AtualizarLivro(LivroViewModel livroViewModel)
        {
            var livro = repository.GetByID(livroViewModel.Id ?? 0);
            if (livro == null)
                throw new Exception("Livro não encontrado para alteração!");
            livro.Titulo = livroViewModel.Titulo;
            livro.Autor = livroViewModel.Autor;
            livro.Editora = livroViewModel.Editora;
            livro.Ano = livroViewModel.Ano ?? livro.Ano;
            repository.SaveChanges();
        }

        public LivroViewModel ConsultarLivro(int livroId)
        {
            var livro = repository.GetByID(livroId);
            return Convert(livro);
        }

        public IEnumerable<LivroViewModel> ListarLivros()
        {
            var livros = repository.GetAll();
            return livros.Select(x => Convert(x)).ToList();
        }

        public void RemoverLivro(int livroId)
        {
            var livro = repository.GetByID(livroId);
            if (livro == null)
                throw new Exception("Livro não encontrado para remoção!");
            repository.Delete(livro);
            repository.SaveChanges();
        }
    }
}
