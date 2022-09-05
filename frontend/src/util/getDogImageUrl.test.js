import { getDogImageUrl } from "./getDogImageUrl";

global.fetch = jest.fn();

test("returns result if array", async () => {
  fetch.mockResolvedValue({
    json: () =>
      Promise.resolve({
        message:
          "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg",
      }),
  });

  expect(await getDogImageUrl()).toEqual(
    "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg"
  );
});
