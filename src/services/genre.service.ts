import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IGenre} from "../interfaces";
import {api_key} from "../constants";

export const genreService = {
    getAll: () => axiosService.get<IGenre[]>(urls.genre, {params: {api_key}}).then(value => value.data)
}