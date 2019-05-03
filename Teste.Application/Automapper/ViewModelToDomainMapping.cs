using AutoMapper;
using Teste.Application.Models;
using Teste.Domain.Entities;

namespace Teste.Application.Automapper
{
    //Saves, Deletes, Edits
    public class ViewModelToDomainMapping : Profile
    {        
        public ViewModelToDomainMapping()
        {
            CreateMap<ClientModel, Client>()
            .ForPath(x => x.Name, w => w.MapFrom(s => s.Name))
            .ForPath(x => x.RG, w => w.MapFrom(s => s.RG))
            .ForPath(x => x.CPF, w => w.MapFrom(s => s.CPF))
            .ForPath(x => x.BirthDate, w => w.MapFrom(s => s.BirthDate))

            // Address
            .ForMember(x => x.Address, w => w.MapFrom(s => s.Address))

            // Social Network
            .ForMember(x => x.SocialNetwork, w => w.MapFrom(s => s.SocialNetwork))

            // Telephones
            .ForMember(x => x.Telephones, w => w.MapFrom(s => s.Telephones));
        }
    }
}