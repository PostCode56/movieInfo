import {Loader, Error, MovieList} from "../components";
import React, {FC} from "react";

interface ILoad {
    loading: boolean,
    error: boolean,
}

export const ScreenSaver: FC<ILoad> = ({loading, error}) => {
    if (loading)
        return (
            <Loader/>
        )
    if (error)
        return (
            <Error/>
        )
    return (
        <MovieList/>
    )
};