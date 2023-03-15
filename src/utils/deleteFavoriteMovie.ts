import {TypesLikes} from "../redux/types/typesLikes";
import {deleteFavorite} from "../redux/reducer/movieReducer";

export const deleteFavoriteMovie = (id: number, arrayFavorite: TypesLikes.RootObject[], dispatch: any) => {
    if (arrayFavorite.find(arrayFavorite => arrayFavorite.id === id)) {
        const array = [...arrayFavorite];
        const result = arrayFavorite.find(arrayFavorite => arrayFavorite.id === id)
        if (result !== undefined) {
            const arrayF = array.indexOf(result)
            if (arrayF > -1) {
                array.splice(arrayF, 1);
                dispatch(deleteFavorite(array))
            }
        }
    }
}