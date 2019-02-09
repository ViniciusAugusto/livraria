using Domain.Livros;
using Domain.Livros.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository.Livros
{
    public class LivroRepository : ILivroRepository
    {
        private LivrariaContext context;
        public LivroRepository(LivrariaContext context)
        {
            this.context = context;
        }

        public IEnumerable<Livro> GetAll()
        {
            return context.Livros.OrderBy(x => x.Titulo).ToList();
        }

        public Livro GetByID(int livroId)
        {
            return context.Livros.FirstOrDefault(x => x.Id == livroId);
        }

        public void Save(Livro livro)
        {
            context.Livros.Add(livro);
        }

        public void Delete(Livro livro)
        {
            context.Livros.Remove(livro);
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }
    }
}
