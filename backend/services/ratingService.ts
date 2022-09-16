import executeQuery from "../db";

interface RateDogs {
  dog: string;
  userId: string;
  score: number;
}

interface RateDogsSaved extends RateDogs {
  id: number;
}

export async function addDogToRatings(dog: RateDogs): Promise<RateDogsSaved> {
  const rating = await executeQuery(
    "INSERT INTO rate_dogs(dog, user_id, score) VALUES($1, $2, $3) RETURNING *",
    [dog.dog, dog.userId, dog.score]
  );
  return {
    id: rating.rows[0].id,
    dog: rating.rows[0].dog,
    userId: rating.rows[0].user_id,
    score: rating.rows[0].score
  };
}

export async function checkDogRating(incomingDog: string, incomingUserId: string): Promise<boolean> {
  const rating = await executeQuery(
    "select * from rate_dogs where dog = $1 AND user_id = $2",
    [incomingDog, incomingUserId]
  );
  return !!rating.rows.length;
}
