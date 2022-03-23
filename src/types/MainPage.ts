import {IGenre} from "./genresSelection"

export interface IMainProps{
    genres: IGenre[];
    setGenres: (value: IGenre[]) => void;
    isBlockView: boolean
    setView: (value: boolean) => void;
}