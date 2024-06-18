using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class DataContext : IdentityDbContext<ApplicationUser> {
        
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }

        public DbSet<City> Cities { get; set; }
    }
}