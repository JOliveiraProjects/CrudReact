using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text.RegularExpressions;

namespace Teste.Common
{
    public static class Util
    {
        #region Validations

        public static bool IsValidDocument(this string value)
        {
            if (string.IsNullOrEmpty(value))
                value = "";

            value = value.Trim();
            value = value.Replace(".", "").Replace("-", "").Replace("/", "");

            if(value.Length == 11) 
                return value.IsValidCPF();

            return value.IsValidCNPJ();
        }

        public static bool IsValidEmail(this String email)
        {
            var r = new Regex(@"^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$");
            return !String.IsNullOrEmpty(email) && r.IsMatch(email);
        }

        public static bool IsValidCNPJ(this string value)
        {
            if (string.IsNullOrEmpty(value))
                value = "";

            string cnpj = value.Replace(".", "").Replace("/", "").Replace("-", "").PadLeft(14, '0');
            int[] digitos, soma, resultado;
            int nrDig;
            string ftmt;
            bool[] value_ok;
        
            ftmt = "6543298765432";
            digitos = new int[14];
            soma = new int[2];
            soma[0] = 0;
            soma[1] = 0;
            resultado = new int[2];
            resultado[0] = 0;
            resultado[1] = 0;
            value_ok = new bool[2];
            value_ok[0] = false;
            value_ok[1] = false;

            try
            {
                for (nrDig = 0; nrDig < 14; nrDig++)
                {
                    digitos[nrDig] = int.Parse(
                        value.Substring(nrDig, 1));

                    if (nrDig <= 11)
                        soma[0] += (digitos[nrDig] * int.Parse(ftmt.Substring(nrDig + 1, 1)));

                    if (nrDig <= 12)
                        soma[1] += (digitos[nrDig] * int.Parse(ftmt.Substring(nrDig, 1)));
                }

                for (nrDig = 0; nrDig < 2; nrDig++)
                {
                    resultado[nrDig] = (soma[nrDig] % 11);

                    if ((resultado[nrDig] == 0) || (resultado[nrDig] == 1))
                        value_ok[nrDig] = (digitos[12 + nrDig] == 0);
                    else
                        value_ok[nrDig] = (digitos[12 + nrDig] == (11 - resultado[nrDig]));
                }

                return (value_ok[0] && value_ok[1]);
            }
            catch { return false; }
        }

        public static bool IsValidCPF(this string value)
        {
            int[] multiplicador1 = new int[9] { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
            int[] multiplicador2 = new int[10] { 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 };
            string tempvalue;
            string digito;
            int soma;
            int resto;

            if (string.IsNullOrEmpty(value))
                value = "";

            value = value.Trim();
            value = value.Replace(".", "").Replace("-", "");

            if (value.Length != 11)
                return false;

            tempvalue = value.Substring(0, 9);
            soma = 0;

            for (int i = 0; i < 9; i++)
            {
                soma += int.Parse(tempvalue[i].ToString()) * (multiplicador1[i]);
            }
            resto = soma % 11;

            if (resto < 2)
                resto = 0;
            else
                resto = 11 - resto;

            digito = resto.ToString();
            tempvalue = tempvalue + digito;
            int soma2 = 0;

            for (int i = 0; i < 10; i++)
            {
                soma2 += int.Parse(tempvalue[i].ToString()) * multiplicador2[i];
            }

            resto = soma2 % 11;

            if (resto < 2)
                resto = 0;
            else
                resto = 11 - resto;

            digito = digito + resto.ToString();
            return value.EndsWith(digito);
        }

        public static bool ContainOnlyDigits(this string input)
        {
            var containsNumbers = true;
            var rule = Regex.IsMatch(input, "^[0-9]+$", RegexOptions.Compiled);
            var ruleTwo = Regex.IsMatch(input, @"/d", RegexOptions.Compiled);

            if (!ruleTwo)
                containsNumbers = false;
            return containsNumbers;
        }

        public static string RemoveSpecialCharacters(this String input)
        {
            if (string.IsNullOrEmpty(input))
                return input;

            var r = new Regex("(?:[^a-z0-9 ]|(?<=['\"])s)",
                RegexOptions.IgnoreCase | RegexOptions.CultureInvariant | RegexOptions.Compiled);
            return r.Replace(input, String.Empty);
        }

        #endregion

        #region Enum

        public static TEntity ToEnum<TEntity>(this string value, bool ignoreCase = true)
        {
            return (TEntity)Enum.Parse(typeof(TEntity), value, ignoreCase);
        }

        public static TEntity GetValue<TEntity>(this Enum value)
        {
            return (TEntity)Convert.ChangeType(value, typeof(TEntity));
        }

        public static String GetDescription(this Enum value)
        {
            var fi = value.GetType().GetField(name: value.ToString());
            var atributes = (DescriptionAttribute[])fi.GetCustomAttributes(typeof(DescriptionAttribute), false);

            if (atributes.Length > 0)
                return atributes[0].Description;

            return value.ToString();
        }

        public static List<string> GetDescriptions(this Type enumName)
        {
            var descriptionList = new List<string>();
            var enumMembers = enumName.GetFields();

            foreach (var member in enumMembers)
            {
                if (Attribute.GetCustomAttribute(member,
                typeof(DescriptionAttribute)) is DescriptionAttribute attribute)
                {
                    descriptionList.Add(attribute.Description);
                }

            }

            return descriptionList;
        }

        #endregion

        public static Pagination<TEntity> Pagination<TEntity>(this IEnumerable<TEntity> model, int currentPage) where TEntity : class
        {
            int count = model.Count();
            var page = new Pagination<TEntity>
            {
                Page = new PageSetting
                {
                    CurrentPage = currentPage
                }
            };

            page.Page.PageSize = page.Page.PageSize;
            page.Page.TotalCount = count;
            page.Page.TotalPages = (int)Math.Ceiling(count / (double)page.Page.PageSize);
            var items = model.Skip((page.Page.CurrentPage - 1) * page.Page.PageSize).Take(page.Page.PageSize).ToList();
            page.Page.PreviousPage = page.Page.CurrentPage > 1;
            page.Page.NextPage = page.Page.CurrentPage < page.Page.TotalPages;
            page.DataList = items;
            return page;
        }
    }
}
