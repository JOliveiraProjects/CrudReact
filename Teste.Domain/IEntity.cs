namespace Teste.Domain
{
    public interface IEntity
    {
        string FederalCode { get; set; }
        bool IsLegal { get; set; }
        string FullName { get; set; }
        string AliasName { get; set; }
    }
}
