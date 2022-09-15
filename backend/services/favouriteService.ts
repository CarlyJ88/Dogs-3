import executeQuery from "../db";

interface FavouriteDogs {
  dog: string;
  userId: string;
}

interface FavouriteDogsSaved extends FavouriteDogs {
  id: number;
}

export async function addDogToFavourites(dog: FavouriteDogs): Promise<FavouriteDogsSaved> {
  const favourite = await executeQuery(
    "INSERT INTO favourite_dogs(dog, user_id) VALUES($1, $2) RETURNING *",
    [dog.dog, dog.userId]
  );
  return {
    id: favourite.rows[0].id,
    dog: favourite.rows[0].dog,
    userId: favourite.rows[0].user_id,
  };
}

export async function checkFavouriteDogs(incomingDog: string, incomingUserId: string): Promise<boolean> {
  const favourite = await executeQuery(
    "select * from favourite_dogs where dog = $1 AND user_id = $2",
    [incomingDog, incomingUserId]
  );
  return !!favourite.rows.length;
}

export async function deleteDog(dog: string, userId: string): Promise<void> {
  await executeQuery('DELETE FROM favourite_dogs WHERE dog = $1 AND user_id = $2', [dog, userId]);
}

export async function listUsersFavouriteDogs(userId: string): Promise<FavouriteDogs[]> {
  const dogs = await executeQuery('SELECT * FROM favourite_dogs where user_id = $1', [userId]);
  return dogs.rows.map((row: any) => ({ id: row.id, dog: row.dog, userId: row.user_id }))
}