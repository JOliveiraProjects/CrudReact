using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Teste.Application.Interfaces;
using Teste.Application.Models;

namespace Teste.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private IClientApplication _clientApplication;

        public ClientController(IClientApplication clientApplication)
        {
            _clientApplication = clientApplication;
        }

        // GET: api/Client
        [HttpGet]
        public IActionResult Get()
        {
            IList<object> resultModel = _clientApplication.ListAll();
            return Ok(resultModel);
        }

        // GET: api/Client/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(string id)
        {
            ClientModel resultModel = _clientApplication.GetById(System.Guid.Parse(id));
            return Ok(resultModel);
        }

        // POST: api/Client
        [HttpPost("save")]
        public IActionResult Post([FromBody] ClientModel model)
        {
            ClientModel resultModel = _clientApplication.Save(model);
            return Ok(resultModel);
        }
    }
}
