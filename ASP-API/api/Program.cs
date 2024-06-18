using api.Data;
using api.Data.Repos;
using api.Dtos;
using api.Helpers;
using api.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

builder.Services.AddDbContext<DataContext>(opations =>{
    opations.UseSqlServer(builder.Configuration.GetConnectionString("HousingDB"));
});

builder.Services.AddIdentity<ApplicationUser, IdentityRole>(opations =>
{
    opations.Password.RequiredLength = 5;
    opations.Password.RequireNonAlphanumeric = false;
    opations.Password.RequiredUniqueChars = 0;
    opations.Password.RequireDigit = false;
    opations.Password.RequireLowercase = false;
    opations.Password.RequireUppercase = false;
}).AddEntityFrameworkStores<DataContext>();


builder.Services.AddScoped<IRepository<City> , CityRepository>();
builder.Services.AddScoped<IAccountRepositery, AccountRepoistery>();

//automapper

builder.Services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);

//JWT
builder.Services.Configure<JWT>(builder.Configuration.GetSection("JWT"));
builder.Services.AddAuthentication(
    opation =>
    {
        opation.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        opation.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(opt =>
    {
        opt.SaveToken = false;
        opt.RequireHttpsMetadata = false;
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = builder.Configuration["JWT:Issuer"],
            ValidAudience = builder.Configuration["JWT:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]))
        };
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
