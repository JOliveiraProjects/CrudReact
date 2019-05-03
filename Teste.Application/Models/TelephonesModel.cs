using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Teste.Application.Models
{
    public class TelephonesModel : IValidatableObject
    {
        public string TelephoneType { get; set; }
        public string Number { get; set; }
        public string DDD { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var validations = new List<ValidationResult>();

            if (string.IsNullOrEmpty(TelephoneType))
            {
                validations.Add(new ValidationResult("O campo tipo de telefone é obrigatório."));
            }

            if (string.IsNullOrEmpty(DDD))
            {
                validations.Add(new ValidationResult("O campo ddd é obrigatório."));
            }

            if (string.IsNullOrEmpty(Number))
            {
                validations.Add(new ValidationResult("O campo número é obrigatório."));
            }

            return validations;
        }
    }
}
