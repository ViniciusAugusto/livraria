using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Livros.Repositories
{
    public interface ILivroRepository
    {
        IEnumerable<Livro> GetAll();
        Livro GetByID(int livroId);
        void Save(Livro livro);
        void Delete(Livro livro);
        void SaveChanges();
    }
}
