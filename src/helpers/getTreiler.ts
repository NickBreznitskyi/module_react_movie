export const getTrailer = (videoList: any): any => {
    return videoList?.results?.filter((video: { type: string; official: any; }) => video.type === 'Trailer' && video.official)[0];
}