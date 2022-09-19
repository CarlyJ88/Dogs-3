import axios from "axios";

export async function getDogImageUrl() {
  return axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.data.message);
}

export async function getDogBreeds() {
  return axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.data.message);
}

export async function getRandomDogFromBreed(dog) {
  return axios
    .get(`https://dog.ceo/api/breed/${dog}/images/random`)
    .then((response) => response.data.message);
}
