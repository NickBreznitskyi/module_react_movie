import {IGenre} from "./genre.interface";

export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | IBelongToCollection;
    budget: number;
    genres: IGenre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies?: IProductionCompanies[];
    production_countries?: IProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages?: ISpokenLanguages[];
    status: string;
    tagline: string | null
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IBelongToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

interface IProductionCompanies {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
}

interface IProductionCountries {
    iso_3166_1: string;
    name: string;
}

interface ISpokenLanguages {
    iso_639_1: string;
    name: string;
}