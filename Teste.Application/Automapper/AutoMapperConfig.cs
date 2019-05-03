using AutoMapper;

namespace Teste.Application.Automapper
{
    public static class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(m => 
            {
                m.AddProfile<DomainToViewModelMapping>();
                m.AddProfile<ViewModelToDomainMapping>();

            });
        }
    }
}
