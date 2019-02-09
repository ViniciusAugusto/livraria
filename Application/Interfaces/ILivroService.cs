using Application.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Interfaces
{
    public interface ILivroService
    {
        void AdicionarLivro(LivroViewModel livroViewModel);
        void AtualizarLivro(LivroViewModel livroViewModel);
        void RemoverLivro(int livroId);
        LivroViewModel ConsultarLivro(int livroId);
        IEnumerable<LivroViewModel> ListarLivros();
    }
}
