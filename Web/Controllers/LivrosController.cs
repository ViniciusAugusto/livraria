using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Application.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LivrosController : ControllerBase
    {
        private ILivroService livroService;
        public LivrosController(ILivroService livroService)
        {
            this.livroService = livroService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<LivroViewModel>> Get()
        {
            try
            {
                return Ok(livroService.ListarLivros());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpGet("{id}", Name = "GetLivro")]
        public ActionResult GetById(int id)
        {
            try
            {
                return Ok(livroService.ConsultarLivro(id));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult Post(LivroViewModel livroViewModel)
        {
            try
            {
                livroService.AdicionarLivro(livroViewModel);
                return Ok("Livro cadastrado com sucesso!");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}", Name = "PutLivro")]
        public ActionResult Put(int id, LivroViewModel livroViewModel)
        {
            try
            {
                livroViewModel.Id = id;
                livroService.AtualizarLivro(livroViewModel);
                return Ok("Livro alerado com sucesso!");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpDelete("{id}", Name = "DeleteLivro")]
        public ActionResult Delete(int id)
        {
            try
            {
                livroService.RemoverLivro(id);
                return Ok("Livro removido com sucesso!");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}