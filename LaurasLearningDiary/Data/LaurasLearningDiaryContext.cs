using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LaurasLearningDiary.Models;

namespace LaurasLearningDiary.Data
{
    public class LaurasLearningDiaryContext : DbContext
    {
        public LaurasLearningDiaryContext (DbContextOptions<LaurasLearningDiaryContext> options)
            : base(options)
        {
        }

        public DbSet<LaurasLearningDiary.Models.Topic> Topic { get; set; }
    }
}
