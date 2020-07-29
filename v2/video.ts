export interface IVideo {
    id: number,
    url: string,
    animeId: number,
    episode: number,
    kind: string,
    language: string,
    quality: string,
    studio: string,
    releasedBy: string[],
    watchesCount: number,
    uploader: number
}
