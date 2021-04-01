using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAPI.Models;

namespace TestAPI.Service
{
   public interface IPersonService
    {
        List<Person> GetAll();
        void Save(Person person);
    }
}
