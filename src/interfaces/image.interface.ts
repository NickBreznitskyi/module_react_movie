export interface IImage {
    id: number;
    backdrops: IImageParams[];
    posters: IImageParams[];
}

interface IImageParams {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    width: number;
}