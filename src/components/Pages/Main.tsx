import React, {FC, useEffect} from 'react';
import {Header} from "../Header/Header";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {ScreenSaver} from "../../utils/screenSaver";
import {getFetchMovie} from "../../redux/reducer/movieReducer";

export const Main: FC = () => {
    const loading = useAppSelector(state => state.movieReducer.isLoading)
    const error = useAppSelector(state => state.movieReducer.error)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFetchMovie())
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