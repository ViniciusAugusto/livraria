using System;
using System.Collections.Generic;
using System.Text;

namespace Application.ViewModels
{
    public class LivroViewModel
    {
        public int? Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Editora { get; set; }
        public int? Ano { get; set; }
    }
}
