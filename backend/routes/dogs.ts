var express = require("express");
var router = express.Router();
import { addDogToFavourites, checkFavouriteDogs, deleteDog, listUsersFavouriteDogs } from "../services/favouriteService";
import { addDogToRatings, checkDogRating, dogsOverallRating, orderDogsByRating, usersDogRating } from "../services/ratingService";

router.get("/favourites", async function (req, res, next) {
  const userId = req.body.userId;
  const passBack = await listUsersFavouriteDogs(userId);
  res.json(passBack)
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

router.post("/ratings/add-dog", async function (req, res, next) {
  const dog = req.body;
  const doesDogExist = await checkDogRating(dog.dog, dog.userId);
  if (!doesDogExist) {
    const passBack = await addDogToRatings(dog.dog, dog.userId, dog.score);
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

// service for users current rating of the dogsOverallRating
router.get("/rating-my-dog", async function (req, res, next) {
  // const dog = req.body.dog;
  // const userId = req.body.userId;
  const dog = req.query.dog;
  const userId = req.query.userId;
  const passBack = await usersDogRating(dog, userId);
  res.json(passBack);
});

// service that gets dogs by score

module.exports = router;
