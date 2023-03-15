import {TypesLikes} from "../redux/types/typesLikes";
import {TypesMovie} from "../redux/types/typesMovie";
import {successFavorite, fetchErrorModal, fetchCloseModal} from "../redux/reducer/movieReducer";
import {fetchModalInfo} from "../redux/api/api";

export const addFavoriteList = (id: number, movies: TypesMovie.Result[], arrayFavorite: TypesLikes.RootObject[], dispatch: any) => {
    const result = movies.find(movies => movies.id === id)
    if (arrayFavorite.find(arrayFavorite => arrayFavorite.id === id)) {
        if (result !== undefined) {
            dispatch(fetchErrorModal())
            fetchModalInfo(result.id, dispatch)
            setTimeout(() => {
                dispatch(fetchCloseModal())
            }, 750)
        }
    } else {
        if (result !== undefined) {
            fetchModalInfo(result.id, dispatch)
            dispatch(successFavorite(result))
        }
    }
}
