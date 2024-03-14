import { db } from "../db.js";

export class MoviesService {
  static async getMovies() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { results: db } });
      }, 500);
    });
  }

  static async getMovieById(id) {
    return new Promise((resolve) =>
      resolve(db.find((movie) => movie.id === id))
    );
  }
}
