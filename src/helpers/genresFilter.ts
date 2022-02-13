import {IGenre, IMovie} from "../interfaces";

export const genresFilter = (genres: IGenre[], movie: IMovie): IGenre[] => {
   return  genres?.filter(genre => movie.genre_ids.includes(genre.id))
}