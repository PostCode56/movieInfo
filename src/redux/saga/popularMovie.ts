import {call, delay, put, takeEvery} from "typed-redux-saga";
import {TypesMovie} from "../types/typesUsers";
import {successMovie, ErrorMovie} from "../reducer/movieReducer";
import axios from "axios";

const basic = "https://api.themoviedb.org/3/"
const basicPopular = "discover/movie?sort_by=popularity.desc"
const getPopularMovie = () => axios.get<TypesMovie.RootType[]>(`${basic}${basicPopular}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

function* workerMoviePopularFetch(): unknown {
    try {
        yield delay(600)
        const response = yield call(getPopularMovie)
        yield put(successMovie(response.data))
    } catch (e) {
        yield put(ErrorMovie)
    }
}

export function* moviePopularWatcher() {
    yield takeEvery('movie/getFetchMovie', workerMoviePopularFetch)
}


