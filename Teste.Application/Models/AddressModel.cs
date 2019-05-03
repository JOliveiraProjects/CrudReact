using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Teste.Application.Models
{
    public class AddressModel : IValidatableObject
    {
        public string AddressType { get; set; }
        public string Thoroughfare { get; set; }
        public string Number { get; set; }
        public string Complement { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Postcode { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var validations = new List<ValidationResult>();

            if (string.IsNullOrEmpty(AddressType))
            {
                validations.Add(new ValidationResult("O campo tipo de endereço obrigatório."));
            }

            if (string.IsNullOrEmpty(Thoroughfare))
            {
                validations.Add(new ValidationResult("O campo logradouro é obrigatório."));
            }

            if (string.IsNullOrEmpty(Number))
            {
                validations.Add(new ValidationResult("O campo número é obrigatório."));
            }

            if (string.IsNullOrEmpty(Neighborhood))
            {
                validations.Add(new ValidationResult("O campo bairro é obrigatório."));
            }

            if (string.IsNullOrEmpty(City))
            {
                validations.Add(new ValidationResult("O campo cidade é obrigatório."));
            }

            if (string.IsNullOrEmpty(State))
            {
                validations.Add(new ValidationResult("O campo estado é obrigatório."));
            }

            if (string.IsNullOrEmpty(Postcode))
            {
                validations.Add(new ValidationResult("O campo cep é obrigatório."));
            }

            return validations;
        }
    }
}
