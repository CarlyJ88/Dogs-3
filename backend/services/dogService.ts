// import executeQuery from "../db";

// interface Dogs {
//   breed: string;
//   imageUrl: number;
// }

// interface DogsSaved extends Dogs {
//   id: number;
// }

// export async function addDog(dogs: Dogs): Promise<DogsSaved> {
//   const dog = await executeQuery(
//     "INSERT INTO dogs(breed, image_url) VALUES($1, $2) RETURNING *",
//     [dogs.breed, dogs.imageUrl]
//   );
//   return {
//     id: dog.rows[0].id,
//     breed: dog.rows[0].breed,
//     imageUrl: dog.rows[0].image_url,
//   };
// }
