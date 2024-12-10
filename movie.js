const z = require("zod");

const movieSchema = z.object({
  title: z.string(),
  year: z.number().int().positive().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().int().min(0).max(10),
  poster: z.string().url(),
  genre: z.array(
    z.enum([
      "Action",
      "Adventure",
      "Crime",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Thriller",
      "Sci-Fi",
    ])
  ),
});

function validateMovie(object) {
  return movieSchema.safeParse(object);
}

function validatePartialMovie(object){
    return movieSchema.partial().safeParse(object)
}

module.exports = { validateMovie, validatePartialMovie };
