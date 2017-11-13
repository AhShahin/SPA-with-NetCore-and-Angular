using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Precima.Models;
using Precima.Presistence;

namespace Precima.Controllers
{
    [Route("api/Items")]
    public class ItemController: Controller
    {
        private readonly PrecimaDbContext context;
        public ItemController(PrecimaDbContext context)
        {
            this.context = context;
        }

        [HttpGet()]
         public async Task<IActionResult> GetItems()
        {
            var items = await context.Items.ToListAsync();
           
            return Ok(items);
        }
    }
}