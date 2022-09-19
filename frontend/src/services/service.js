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
      console.log(res);
      return res;
    });
}

export function getFavouriteDogs() {
  return axios.get(`http://localhost:4000/dogs/favourites`).then((res) => res);
}
