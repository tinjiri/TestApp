using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TestAPI.Models;

namespace TestAPI.Service
{
    public class PersonService : IPersonService
    {
        private object lockObject = new object();
        public List<Person> GetAll()
        {
            List<Person> listOfPersons = new List<Person>();
            try
            {
                string filename = @"C:\Temp\persons.txt";
                FileInfo fi = new FileInfo(filename);

                if (!fi.Exists)
                {
                    throw new Exception("Improper / no file does not exist");

                }
                string line;


                // Read the file and display it line by line.
                System.IO.StreamReader file = new System.IO.StreamReader(@"C:\Temp\persons.txt");
                while ((line = file.ReadLine()) != null)
                {
                    if (!String.IsNullOrEmpty(line))
                    {
                        string[] words = line.Split(',');
                        string[] datestr = words[2].Split('-');
                        Person person = new Person
                        {
                            Name = words[0],
                            Surname = words[1],
                            // DateOfBirth= DateTime.ParseExact(words[2], "yyyy-MM-dd", CultureInfo.InvariantCulture)
                            DateOfBirth = new DateTime(Int32.Parse(datestr[0]), Int32.Parse(datestr[1]), Int32.Parse(datestr[2]))
                        };
                        listOfPersons.Add(person);
                    }
                }

                file.Close();
                //throw new NotImplementedException();

            }
            catch (Exception e)
            {
                throw e;
            }
            return listOfPersons;
        }

        public void Save(Person person)
        {
            try
            {
                string filename = @"C:\Temp\persons.txt";
                FileInfo fi = new FileInfo(filename);

                if (!fi.Exists)
                {
                    fi.Create();
                }

                lock (lockObject)
                {
                    using (var sw = new StreamWriter(filename, true))

                    {
                        sw.WriteLine(person.Name + "," + person.Surname + "," + person.DateOfBirth.ToString("yyyy-MM-dd") + "\n");
                        sw.Flush();
                    }
                }

            }
            catch (Exception e)
            {

            }
        }
    }
}
