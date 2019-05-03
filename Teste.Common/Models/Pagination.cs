namespace Teste.Common
{
    public class Pagination<TEntity> where TEntity : class
    {
        public object DataList { get; set; }
        public PageSetting Page { get; set; }
    }

    public class PageSetting
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 100;
        public int TotalCount { get; set; } = 0;
        public int CurrentPage { get; set; } = 1;
        public int TotalPages { get; set; } = 0;
        public bool PreviousPage { get; set; } = false;
        public bool NextPage { get; set; } = false;
    }

    public class Queries
    {
        public string[] Headers { get; set; }
        public string[] SearchField { get; set; }
        public string SearchValue { get; set; }
    }
}
