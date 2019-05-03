using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Teste.Application.Models
{
    public class SocialNetworkModel : IValidatableObject
    {
        public string Name { get; set; }
        public string Url { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var validations = new List<ValidationResult>();

            if (string.IsNullOrEmpty(Name))
            {
                validations.Add(new ValidationResult("O campo nome obrigatório."));
            }

            if (string.IsNullOrEmpty(Url))
            {
                validations.Add(new ValidationResult("O campo url é obrigatório."));
            }

            return validations;
        }
    }
}
