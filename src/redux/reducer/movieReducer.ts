import {TypesMovie} from "../types/typesMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypesInfo} from "../types/typesInfo";
import {TypesLikes} from "../types/typesLikes";

interface MovieState {
    movies: TypesMovie.RootType,
    favorite: TypesLikes.RootObject[],
    modalInfo: TypesInfo.RootType,
    modalActive: boolean,
    modalError: boolean,
    info: TypesInfo.RootType,
    isLoading: boolean,
    error: boolean,
}

const initialState: MovieState = {
    movies: {results: []},
    favorite: [],
    modalActive: false,
    modalError: false,
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
    modalInfo: {
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
        fetchMovie(state) {
            state.isLoading = true;
        },
        fetchInfo(state) {
            state.isLoading = true;
        },
        successFetchMovie(state, action: PayloadAction<TypesMovie.RootType>) {
            state.isLoading = false;
            state.movies = action.payload;
        },
        successFetchInfo(state, action: PayloadAction<TypesInfo.RootType>) {
            state.isLoading = false;
            state.modalActive = false;
            state.info = action.payload;
        },
        successModalInfo(state, action: PayloadAction<TypesInfo.RootType>) {
            state.isLoading = false;
            state.modalActive = true;
            state.modalInfo = action.payload;
        },
        successFavorite(state, action: PayloadAction<TypesLikes.RootObject>) {
            state.isLoading = false;
            state.favorite.push(action.payload);
        },
        deleteFavorite(state, action: PayloadAction<TypesLikes.RootObject[]>) {
            state.isLoading = false;
            state.favorite = action.payload;
        },
        fetchCloseModal(state) {
            state.isLoading = false;
            state.modalActive = false;
            state.modalError = false;
        },
        fetchErrorModal(state) {
            state.isLoading = false;
            state.modalError = true;
            state.modalActive = true
        },
        fetchErrorMovie(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
})
export const {
    fetchMovie,
    successFetchMovie,
    successFetchInfo,
    fetchErrorMovie,
    successFavorite,
    deleteFavorite,
    fetchInfo,
    successModalInfo,
    fetchCloseModal,
    fetchErrorModal,
} = movieSlice.actions;
export default movieSlice.reducer;