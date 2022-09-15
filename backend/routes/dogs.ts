var express = require("express");
var router = express.Router();
import { addDogToFavourites, checkFavouriteDogs, deleteDog } from "../services/favouriteService";

router.get("/", function (req, res, next) {
  // GET the dogs
});

router.post("/favourites/add-dog", async function (req, res, next) {
  const dog = req.body;
  const doesDogExist = await checkFavouriteDogs(dog.dog, dog.userId);
  if (!doesDogExist) {
    const passBack = await addDogToFavourites(dog);
    res.json(passBack);
  } else res.status(200).send('dog aleady exists');
});

router.delete('/favourites/delete-dog', async(req, res) => {
  const dog = req.body.dog;
  const userId = req.body.userId;
  const passBack = await deleteDog(dog, userId);
  res.json(passBack)
})

router.get("/favorites", function (req, res, next) {
  // GET my favorite dogs. Might need an authentication middleware
});

router.post("/favorites", function (req, res, next) {
  // ADD a dog to my favorites. Might need an authentication middleware
});

module.exports = router;
