using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Data.Repos;
using api.Dtos;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase
    {
        private readonly IRepository<City> repository;
        private readonly IMapper mapper;

        public CityController(
            IRepository<City> repository,
            IMapper mapper
            )
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var cities = await repository.getAll();
            IEnumerable<CityDto> citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);
            return Ok(citiesDto);
        }

        [HttpPost("post")]
        public async Task<IActionResult> Insert(CityDto model)
        {
            //City city = new()
            //{
            //    Name = model.Name,
            //    LastUpdatedBy = 1,
            //    LastUpdatedOn = DateTime.Now
            //};
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            City city = mapper.Map<City>(model);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;
            repository.Add(city);
            return Ok(city);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> delete( int id)
        {
  
            var city = await repository.Delete(id);
            return Ok(city);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> update(int id , CityDto model)
        {

            var city = await repository.Find(id);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;
            mapper.Map(model, city);
            await repository.SaveAsync();
            return Ok(city);
        }

        [HttpPatch("patch/{id}")]
        public async Task<IActionResult> patch(int id, JsonPatchDocument<City> model)
        {

            var city = await repository.Find(id);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;
            model.ApplyTo(city,ModelState);
            await repository.SaveAsync();
            return Ok(city);
        }


    }
}