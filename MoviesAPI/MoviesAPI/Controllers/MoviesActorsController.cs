using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Helpers;
using MoviesAPI.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Cors;

namespace MoviesAPI.Controllers
{
    [Route("api/moviesactors")]
    [ApiController]
    [EnableCors(PolicyName = "AllowAPIRequestIO")]
    public class MoviesActorsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IFileStorageService fileStorageService;
        private readonly ILogger<MoviesController> logger;
        private readonly string containerName = "moviesactors";

        public MoviesActorsController(ApplicationDbContext context,
            IMapper mapper,
            IFileStorageService fileStorageService,
            ILogger<MoviesController> logger)
        {
            this.context = context;
            this.mapper = mapper;
            this.fileStorageService = fileStorageService;
            this.logger = logger;
        }

        [HttpGet("{id}", Name = "getMoviesOfActor")]
        public async Task<ActionResult<List<MoviesActorDTO>>> Get(string id)
        {
            //var person = await context.People.FirstOrDefaultAsync(x => x.Id == id);

            var query = from t1 in context.Movies
                        join t2 in context.MoviesActors on t1.Id equals t2.MovieId
                        where t2.PersonId == id
                        select new MoviesActorDTO{ 
                        MovieId = t1.Id,
                        PersonId = t2.PersonId,
                        Character = t2.Character,
                        Title = t1.Title,
                        Poster = t1.Poster};


            var joinresult = await query.ToListAsync();

            if (joinresult == null)
            {
                return NotFound();
            }
            var result = new List<MoviesActorDTO>();
            result = mapper.Map<List<MoviesActorDTO>>(joinresult);

            //return mapper.Map<List<MoviesActorDTO>>(result);
            return result;
        }
    }
}
