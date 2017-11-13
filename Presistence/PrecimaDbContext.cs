using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using Precima.Models;

namespace Precima.Presistence
{
    public class PrecimaDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<ShoppinList> ShoppinList { get; set; }
        public PrecimaDbContext(DbContextOptions<PrecimaDbContext> options) : base(options)
        {}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
            .HasMany(u => u.ShoppinListItems);

            modelBuilder.Entity<ShoppinList>()
            .HasOne(s => s.Item);

            modelBuilder.Entity<User>()
                .Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(30);

            modelBuilder.Entity<Item>()
                .Property(i => i.Title)
                .IsRequired()
                .HasMaxLength(150);    

            modelBuilder.Entity<Item>()
                .Property(i => i.Quantity)
                .IsRequired();
                
            modelBuilder.Entity<Item>()
                .Property(i => i.Description)
                .IsRequired()
                .HasMaxLength(1000);

            modelBuilder.Entity<Item>()
                .Property(i => i.ImageUrl)
                .IsRequired()
                .HasMaxLength(150);     

            modelBuilder.Entity<ShoppinList>()
                .Property(s => s.Notes)
                .IsRequired()
                .HasMaxLength(1000);

            modelBuilder.Entity<ShoppinList>()
                .Property(s => s.Unit)
                .IsRequired();

            modelBuilder.Entity<ShoppinList>()
                .Property(s => s.IsCompleted)
                .IsRequired()
                .HasColumnType("bit");
        }    
    }
}