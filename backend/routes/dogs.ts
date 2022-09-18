var express = require("express");
var router = express.Router();
import { addDogToFavourites, checkFavouriteDogs, deleteDog, listUsersFavouriteDogs } from "../services/favouriteService";
import { addDogToRatings, checkDogRating, dogsOverallRating, orderDogsByRating } from "../services/ratingService";

router.get("/", function (req, res, next) {
  // GET the dogs
});

router.post("/favourites/add-dog", async function (req, res, next) {
  const dog = req.body;
  const doesDogExist = await checkFavouriteDogs(dog.dog, dog.userId);
  if (!doesDogExist) {
    const passBack = await addDogToFavourites(dog);
    res.json(passBack);
  } else res.status(200).send('dog has aleady been favourited');
}); // authentication middleware?

router.delete('/favourites/delete-dog', async function(req, res) {
  const dog = req.body.dog;
  const userId = req.body.userId;
  const passBack = await deleteDog(dog, userId);
  res.json(passBack)
})

router.get("/ratings/add-dog", async function (req, res, next) {
  const dog = req.body;
  const doesDogExist = await checkDogRating(dog.dog, dog.userId);
  if (!doesDogExist) {
    const passBack = await addDogToRatings(dog);
    res.json(passBack);
  } else res.status(200).send('dog has aleady been rated');
  // authentication middleware?
});

router.get("/rating", async function (req, res, next) {
  const dog = req.body.dog;
  const passBack = await dogsOverallRating(dog);
  res.json(passBack);
});

router.get("/rating/order", async function (req, res, next) {
  const sortDogBy = req.body.sortDogBy;
  const passBack = await orderDogsByRating(sortDogBy);
  res.json(passBack);
});

module.exports = router;
