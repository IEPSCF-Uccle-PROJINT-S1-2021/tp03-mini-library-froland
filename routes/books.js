var express = require("express");
var router = express.Router();

const books = [
  {
    author: "Guillaume Debré",
    title: "L'affaire Lafayette",
    category: "roman historique",
  },
  {
    author: "Gérald Messadié",
    title: "La conspiration Jeanne d'Arc",
    category: "roman historique",
  },
  {
    author: "J.R.R. Tolkien",
    title: "Le Seigneur des anneaux",
    category: "fantasy",
  },
  { author: "Michael Ende", title: "L'Histoire sans fin", category: "fantasy" },
  { author: "Andrzej Sapkowski", title: "Le Sorceleur", category: "fantasy" },
  {
    author: "George R. R. Martin",
    title: "Le Trône de fer",
    category: "fantasy",
  },
  {
    author: "Hervé Bazin",
    title: "Vipère au poing",
    category: "autobiographie",
  },
  {
    author: "Marie Cardinal",
    title: "Les mots pour le dire",
    category: "autobiographie",
  },
  {
    author: "Giacomo Casanova",
    title: "Histoire de ma vie",
    category: "autobiographie",
  },
];

router.get("/search", (req, res) => {
  const categorySet = new Set(books.map((book) => book.category));
  const categories = Array.from(categorySet).sort();
  console.log(categories);
  res.render("search", {
    title: "Rechercher des livres",
    categories: categories,
  });
});

const collator = new Intl.Collator("fr");
const comparator = (book1, book2) => {
  return collator.compare(book1.author, book2.author);
};

router.post("/list", (req, res) => {
  const category = req.body.category;
  const found = books
    .filter((book) => book.category == category)
    .sort(comparator);
  res.render("list", {
    title: "Livres trouvés",
    category: category,
    books: found,
  });
});

module.exports = router;
