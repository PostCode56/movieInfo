import axios from "axios";
import {getFetchMovie, successInfo} from "../redux/reducer/movieReducer";

export const fetchInfo = (id: number, dispatch: any) => {
    const basic = "https://api.themoviedb.org/3/"
    dispatch(getFetchMovie())
    setTimeout(() => {
        const response = axios.get(`${basic}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(
            results => dispatch(successInfo(results.data)))
    }, 400)
}