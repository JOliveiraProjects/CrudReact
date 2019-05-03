using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Teste.Common;

namespace Teste.Application.Models
{
    public class ClientModel : IValidatableObject
    {
        public string Id { get; set; }

        public ClientModel()
        {
            Address = new List<AddressModel>();
            SocialNetwork = new List<SocialNetworkModel>();
            Telephones = new List<TelephonesModel>();
        }

        public string Name { get; set; }

        public string CPF { get; set; }

        public string RG { get; set; }

        public DateTime BirthDate { get; set; }

        public List<TelephonesModel> Telephones { get; set; }

        public List<AddressModel> Address { get; set; }

        public List<SocialNetworkModel> SocialNetwork { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var validations = new List<ValidationResult>();

            if (string.IsNullOrEmpty(Name))
            {
                validations.Add(new ValidationResult("O nome é obrigatório."));
            }

            if (string.IsNullOrEmpty(CPF))
            {
                validations.Add(new ValidationResult("CPF obrigatório."));
            }

            if (!CPF.IsValidCPF())
            {
                validations.Add(new ValidationResult("CPF inválido."));
            }

            return validations;
        }
    }
}
