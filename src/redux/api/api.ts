import {
    fetchCloseModal,
    fetchInfo,
    fetchMovie,
    successFetchInfo,
    successFetchMovie,
    successModalInfo
} from "../reducer/movieReducer";
import axios from "axios";
import {TypesMovie} from "../types/typesMovie";

export const imgBasic = "https://image.tmdb.org/t/p/w500"
export const fetchInfoMovie = (id: number, dispatch: any) => {
    const basic = "https://api.themoviedb.org/3/"
    dispatch(fetchInfo())
    setTimeout(() => {
        const response = axios.get(`${basic}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(
            results => dispatch(successFetchInfo(results.data)))
    }, 400)
}
export const fetchModalInfo = (id: number, dispatch: any) => {
    const basic = "https://api.themoviedb.org/3/"
    const response = axios.get(`${basic}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(
        results => dispatch(successModalInfo(results.data)))
    setTimeout(() => {
        dispatch(fetchCloseModal())
    }, 750)
}
export const fetchMovieSaga = (movie: TypesMovie.RootType, dispatch: any) => {
    if (movie.results.length === 0) {
        dispatch(fetchMovie())
    }
}

export const getFetchMoviesLink = (value: string, dispatch: any): void => {
    const basic = "https://api.themoviedb.org/3/"
    let url = ""
    const basicBest = "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
    const basicDrama = "/discover/movie?with_genres=18&primary_release_year=2014"
    const basicKids = "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"
    const basicPopular = "discover/movie?sort_by=popularity.desc"
    switch (value) {
        case "Popular":
            url = `${basic}${basicPopular}&api_key=${process.env.REACT_APP_API_KEY}`;
            break;
        case "Best":
            url = `${basic}${basicBest}&api_key=${process.env.REACT_APP_API_KEY}`;
            break;
        case "Drama":
            url = `${basic}${basicDrama}&api_key=${process.env.REACT_APP_API_KEY}`;
            break;
        case "Kids":
            url = `${basic}${basicKids}&api_key=${process.env.REACT_APP_API_KEY}`;
            break;

    }
    const movieData = axios.get(`${url}`).then(
        results => dispatch(successFetchMovie(results.data)))
}

export const fetchSearch = (search: string, dispatch: any) => {
    const basic = "https://api.themoviedb.org/3/"
    const basicSearch = `/search/movie?api_key=${process.env.REACT_APP_API_KEY}`
    const response = axios.get(`${basic}${basicSearch}&query=${search}`).then(
        results => dispatch(successFetchMovie(results.data))
    )
}



