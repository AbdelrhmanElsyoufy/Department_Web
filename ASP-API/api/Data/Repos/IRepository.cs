using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Data.Repos
{
    public interface IRepository<E> 
    {
        Task<IEnumerable<E>> getAll();

        void Add(E model);

        Task<E> Delete(int id);

        Task<E> Find(int id);

        Task<E> Update(int id , E model);
        Task SaveAsync();




    }
}