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
    [Route("api/user/")]
    public class ShoppingListController : Controller
    {
        private readonly PrecimaDbContext context;
        public ShoppingListController(PrecimaDbContext context)
        {
            this.context = context;
        }
        [HttpPost("ShoppingList")]
         public async Task<IActionResult> CreateShoppinListItem([FromBody] ShoppinList shoppinList)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            
            context.ShoppinList.Add(shoppinList);
            await context.SaveChangesAsync();
            return Ok(shoppinList);
        }
        [HttpGet("{id}/ShoppingList")]
         public  async Task<IActionResult> GetUserShoppinList(int id)
        {
            var userShoppingList = await context.ShoppinList.Include(s => s.Item).Where(s => s.UserId == id).ToListAsync();
           
            return Ok(userShoppingList);
        }
        [HttpPut("ShoppingList/{id}")]
         public async Task<IActionResult> UpdateShoppinListItem(int id, [FromBody] ShoppinList shoppinList)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (shoppinList == null || id != shoppinList.Id)
                return BadRequest();

            var shoppinListItem = await context.ShoppinList.FindAsync(id); 

            shoppinListItem.Unit = shoppinList.Unit;
            shoppinListItem.Notes = shoppinList.Notes;
            shoppinListItem.IsCompleted = shoppinList.IsCompleted;
            shoppinListItem.ItemId = shoppinList.ItemId;
            shoppinListItem.UserId = shoppinList.UserId;

            await context.SaveChangesAsync();
           
            return Ok(shoppinListItem);
        }
        [HttpDelete("ShoppingList/{id}")]
        public async Task<IActionResult> DeleteShoppinListItem(int id)
        {
            var shoppinListItem = await context.ShoppinList.FindAsync(id);;

            if (shoppinListItem == null)
                return NotFound();

            this.context.ShoppinList.Remove(shoppinListItem);
            await context.SaveChangesAsync();

            return Ok(id);
        }
    }
}
