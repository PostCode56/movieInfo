import React, {FC} from 'react';
import {MovieCardHeader,MoviesCard,Loader} from "../components";
import {useAppSelector} from "../redux/hooks/hooks";

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
