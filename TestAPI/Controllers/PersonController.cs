using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAPI.Models;
using TestAPI.Service;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService personService;

        public PersonController(IPersonService personService)
        {
            this.personService = personService;
        }

        [HttpPost]
        [Route("saveperson")]
        public IActionResult Save(Person person)
        {
            if (person == null)
            {
                return BadRequest();
            }

            try
            {
                personService.Save(person);
                return Ok(person);
            }
            catch (Exception ex) { throw ex; }

        }

        [HttpGet]
        [Route("persons")]
        public IActionResult Get()
        {
            try
            {
                var persons = personService.GetAll();
                return Ok(persons);
            }
            catch (Exception ex) { throw ex; }

        }
    }
}
