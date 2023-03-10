import React, {FC} from 'react';
import {MovieCardHeader} from "../MoviesCard/MovieCardHeader/MovieCardHeader";
import {useAppSelector} from "../../redux/hooks/hooks";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import {Loader} from "../index";

export const InfoCardMovie: FC = () => {
    const isLoading = useAppSelector(state => state.movieReducer.isLoading)
    return (
        <>
            <MovieCardHeader/>
            {isLoading
                ? <Loader/>
                : <MoviesCard/>
            }
        </>
    );
};
