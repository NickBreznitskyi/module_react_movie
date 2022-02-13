import {IMovie} from "./movie.interface";

export interface IMovieList {
    dates?: {
        "maximum": string;
        "minimum": string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}