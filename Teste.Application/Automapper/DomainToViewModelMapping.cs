using AutoMapper;
using Teste.Domain.Entities;

namespace Teste.Application.Automapper
{
    //Gets
    public class DomainToViewModelMapping : Profile
    {
        public DomainToViewModelMapping()
        {
            CreateMap<Client, Models.ClientModel>()
            .ForPath(x => x.Id, w => w.MapFrom(s => s.Id))
            .ForPath(x => x.Name, w => w.MapFrom(s => s.Name))
            .ForPath(x => x.RG, w => w.MapFrom(s => s.RG))
            .ForPath(x => x.CPF, w => w.MapFrom(s => s.CPF))
            .ForPath(x => x.BirthDate, w => w.MapFrom(s => s.BirthDate))

            // Address
            .ForMember(x => x.Address, w => w.MapFrom(s => s.Address))

            // Social Network
            .ForMember(x => x.SocialNetwork, w => w.MapFrom(s => s.SocialNetwork))

            // Telephones
            .ForMember(x => x.Telephones, w => w.MapFrom(s => s.Telephones))

            .ForSourceMember(x => x.Id, w => w.DoNotValidate())
            .ForSourceMember(x => x.Inserted, w => w.DoNotValidate())
            .ForSourceMember(x => x.Deleted, w => w.DoNotValidate())
            .ForSourceMember(x => x.Enabled, w => w.DoNotValidate());
        }
    }
}