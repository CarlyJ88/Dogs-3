export async function getDogImageUrl() {
  return await fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((response) => response.message);
}

export async function getDogBreeds() {
  return await fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((response) => response.message);
}

export async function getRandomDogFromBreed(dog) {
  return await fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
    .then((response) => response.json())
    .then((response) => response.message);
}
