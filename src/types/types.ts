export interface MoviesFromApi {
    Title: string,
    Year: number, 
    imdbID : string,
    Type: string,
    Poster: string
}

export interface ListMovies {
    title: string, 
    year: number, 
    linkApi: string, 
    type: string, 
    poster: string
}

const apiKey: string = "9304018a";
export {apiKey}

