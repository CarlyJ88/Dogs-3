import {
  getDogImageUrl,
  getDogBreeds,
  getRandomDogFromBreed,
} from "./getDogImageUrl";
import * as axios from "axios";

jest.mock("axios");

test("fetch dog", async () => {
  axios.get.mockResolvedValue({
    data: {
      message:
        "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg",
    },
  });

  expect(await getDogImageUrl()).toEqual(
    "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg"
  );
});
// check it
test("fetch breeds", async () => {
  axios.get.mockResolvedValue({
    data: {
      message: {
        husky: [],
        sheepdog: ["english", "shetland"],
        terrier: [],
      },
    },
  });
  // check it
  expect(await getDogBreeds()).toEqual({
    husky: [],
    sheepdog: ["english", "shetland"],
    terrier: [],
  });
});

test("fetch random dog from breed", async () => {
  axios.get.mockResolvedValue({
    data: {
      message: "https://images.dog.ceo/breeds/terrier-border/n02093754_367.jpg",
    },
  });

  const breed = "terrier";

  expect(await getRandomDogFromBreed(breed)).toEqual(
    "https://images.dog.ceo/breeds/terrier-border/n02093754_367.jpg"
  );
});
