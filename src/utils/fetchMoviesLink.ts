import axios from "axios";
import {successMovie} from "../redux/reducer/movieReducer";

export const imgBasic = "https://image.tmdb.org/t/p/w500"
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
        results => dispatch(successMovie(results.data)))
}