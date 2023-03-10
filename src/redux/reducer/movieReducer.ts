import {TypesMovie} from "../types/typesUsers";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypesInfo} from "../types/typesInfo";

interface UserState {
    movies: TypesMovie.RootType,
    info: TypesInfo.RootType,
    isLoading: boolean,
    error: boolean,
}

const initialState: UserState = {
    movies: {results: []},
    info: {
        adult: false,
        backdrop_path: "",
        budget: 0,
        genres: [],
        homepage: "",
        id: 0,
        imdb_id: "",
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        production_companies: [],
        production_countries: [],
        release_date: "",
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: "",
        tagline: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    isLoading: false,
    error: false,
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getFetchMovie(state) {
            state.isLoading = true;
        },
        successMovie(state, action: PayloadAction<TypesMovie.RootType>) {
            state.isLoading = false;
            state.movies = action.payload;
        },
        successInfo(state, action: PayloadAction<TypesInfo.RootType>) {
            state.isLoading = false;
            state.info = action.payload;
        },
        ErrorMovie(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
})
export const {getFetchMovie, successMovie, successInfo, ErrorMovie} = movieSlice.actions;
export default movieSlice.reducer;