import React, {FC} from 'react';
import {MovieCardHeader, Loader, FavoriteMovie} from "../components";
import {useAppSelector} from "../redux/hooks/hooks";

export const FavoriteMoviePage: FC = () => {
    const isLoading = useAppSelector(state => state.movieReducer.isLoading)
    return (
        <>
            <MovieCardHeader/>
            {isLoading
                ? <Loader/>
                : <FavoriteMovie/>
            }
        </>
    );
};
