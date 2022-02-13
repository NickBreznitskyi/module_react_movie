import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMovieList} from "../interfaces";
import {api_key} from "../constants";
import {IMovieDetails} from "../interfaces";
import {IImage} from "../interfaces";
import {IVideo} from "../interfaces";
import {ICredit} from "../interfaces";


export const movieService = {
    getPopular: (page: number) => axiosService.get<IMovieList>(urls.popular, {
        params: {
            api_key,
            page
        }
    }).then(value => value.data),
    getTopRated: (page: number) => axiosService.get<IMovieList>(urls.topRated, {
        params: {
            api_key,
            page
        }
    }).then(value => value.data),
    getUpcoming: (page: number) => axiosService.get<IMovieList>(urls.upcoming, {
        params: {
            api_key,
            page
        }
    }).then(value => value.data),
    getSearch: (query: string, page: number) => axiosService.get<IMovieList>(urls.search, {
        params: {
            api_key,
            query,
            page
        }
    }).then(value => value.data),
    getDetails: (id: number) => axiosService.get<IMovieDetails>(`${urls.movie}/${id}`, {
        params: {
            api_key
        }
    }).then(value => value.data),
    getImages: (id: number) => axiosService.get<IImage>(`${urls.movie}/${id}${urls.img}`, {
        params: {
            api_key
        }
    }).then(value => value.data),
    getVideos: (id: number) => axiosService.get<IVideo>(`${urls.movie}/${id}${urls.videos}`, {
        params: {
            api_key
        }
    }).then(value => value.data),
    getCredits: (id: number) => axiosService.get<ICredit>(`${urls.movie}/${id}${urls.credits}`, {
        params: {
            api_key
        }
    }).then(value => value.data),
    getListByGenre: (page: number, id: number) => axiosService.get<IMovieList>(urls.discover, {
        params: {
            api_key,
            with_genres: id,
            page
        }
    }).then(value => value.data)
}