import axios from "axios";
import {successMovie} from "../redux/reducer/movieReducer";

export const featchSearch = (search: string, dispatch: any) => {
    const basic = "https://api.themoviedb.org/3/"
    const basicSearch = `/search/movie?api_key=${process.env.REACT_APP_API_KEY}`
    const response = axios.get(`${basic}${basicSearch}&query=${search}`).then(
        results => dispatch(successMovie(results.data))
    )
}