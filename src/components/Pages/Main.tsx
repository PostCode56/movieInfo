import React, {FC, useEffect} from 'react';
import {Header,ScreenSaver} from "../index";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {fetchMovieSaga} from "../../redux/api/api";

export const Main: FC = () => {
    const loading = useAppSelector(state => state.movieReducer.isLoading)
    const movie = useAppSelector(state => state.movieReducer.movies)
    const error = useAppSelector(state => state.movieReducer.error)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetchMovieSaga(movie,dispatch)
    }, [])

    return (
        <div>
            <Header/>
            <ScreenSaver
                loading={loading}
                error={error}
            />
        </div>
    );
};