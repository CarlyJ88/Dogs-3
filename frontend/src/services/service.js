import axios from "axios";

export function getRating(dog, userId) {
  return axios
    .get(`http://localhost:4000/dogs/rating-my-dog`, {
      params: {
        dog: dog,
        userId: userId,
      },
    })
    .then((res) => res);
}

export function getOverallRating(dog) {
  return axios
    .get(`http://localhost:4000/dogs/rating`, {
      dog: "https://images.dog.ceo/breeds/border-terrier/Zak.jpg",
    })
    .then((res) => {
      // console.log(res);
      return res;
    });
}

export function getFavouriteDogs() {
  return axios.get(`http://localhost:4000/dogs/favourites`).then((res) => res);
}

export function addRating(dog, userId, score) {
  return axios.post(`http://localhost:4000/dogs/ratings/add-dog`, {
    dog: dog,
    userId: userId,
    score: score,
  });
}
