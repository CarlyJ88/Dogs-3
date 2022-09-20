import { usersDogRating } from "./ratingService";
import { Client } from "pg";

describe("lists entries", () => {
  const dog = "https://images.dog.ceo/breeds/terrier-border/n02093754_6189.jpg";
  const userId = "myUserId";
  const values = [dog, userId, 5];
  let client: Client;

  beforeEach(async () => {
    client = new Client({
      user: "postgres",
      password: "password",
      database: "dogs_test",
      host: "localhost",
    });
    await client.connect();
    return await client.query("DELETE FROM rate_dogs");
  });

  it("returns users rating of a dog", async () => {
    await client.query(
      "INSERT INTO rate_dogs(dog, user_id, score) VALUES($1, $2, $3) RETURNING *",
      values
    );

    const rating = await usersDogRating(dog, userId);
    expect(rating).toEqual(5);
  });

  afterEach(async () => {
    await client.query("DELETE FROM rate_dogs");
    return await client.end();
  });
});
