using api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Data.Repos
{
    public class CityRepository : IRepository<City>

    {
        private readonly DataContext context;

      
        public CityRepository(
            DataContext context)
        {
            this.context = context;
        }

        public async void Add(City model)
        {
            await context.AddAsync(model);
            await context.SaveChangesAsync();
           

        }

        public async Task<City> Delete(int id)
        {
            City city = await context.Cities.FindAsync(id);
            context.Cities.Remove(city);
            await context.SaveChangesAsync();
            return city;
        }

        public async Task<City> Find(int id) => await context.Cities.FindAsync(id);

        public async Task<IEnumerable<City>> getAll()
        {
            return await context.Cities.ToListAsync();
        }

        public async Task SaveAsync()
        {
           await context.SaveChangesAsync();
        }

        public async Task<City> Update(int id, City model)
        {
           var city = await this.Find(id);
            if(city != null)
            {
                context.Cities.Update(city);
                await context.SaveChangesAsync();
            }
            return city;

        }
    }
}