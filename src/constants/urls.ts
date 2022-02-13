import {IUrls} from "../interfaces";

const baseURL: string = 'https://api.themoviedb.org/3';

const movie: string = '/movie';

export const urls: IUrls = {
    movie,
    popular: movie + '/popular',
    topRated: movie + '/top_rated',
    genre: '/genre' + movie + '/list',
    upcoming: movie + '/upcoming',
    getImg: 'https://image.tmdb.org/t/p/original',
    img: '/images',
    search: '/search' + movie,
    videos: '/videos',
    credits: '/credits',
    discover: '/discover' + movie
}

export default baseURL

