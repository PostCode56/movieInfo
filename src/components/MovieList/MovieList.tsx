import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {StyledCard, StyledImg, StyledImgFavorite, StyledList, StyledSection, StyledTitle} from "./styledMovieList";
import {Link} from "react-router-dom";
import {fetchInfoMovie,imgBasic} from "../../redux/api/api";
import {ErrorSearch, ModalWindow} from "../index";
import {addFavorite} from "../../assets/images";
import {addFavoriteList} from "../../utils/addFavoriteList";

export const MovieList: FC = () => {
    const movies = useAppSelector(state => state.movieReducer.movies.results)
    const arrayFavorite = useAppSelector(state => state.movieReducer.favorite)
    const modalActive = useAppSelector(state => state.movieReducer.modalActive)
    const dispatch = useAppDispatch();

    return (
        <StyledSection>
            {movies.length === 0
                ? <ErrorSearch/>
                : <StyledList>
                    {movies.map(res => (
                        <StyledCard key={res.id}>
                            <StyledImgFavorite
                                src={addFavorite}
                                onClick={() => addFavoriteList(res.id, movies, arrayFavorite, dispatch)}/>
                            <Link
                                style={{textDecoration: "none", color: "black"}}
                                to={`/info/${res.id}`}
                                key={res.id}
                                onClick={() => fetchInfoMovie(res.id, dispatch)}>
                                <StyledImg src={imgBasic + res.poster_path}/>
                                <StyledTitle>{res.title}</StyledTitle>
                            </Link>
                        </StyledCard>
                    ))}
                </StyledList>}
            {modalActive
                ? <ModalWindow/>
                : <></>}
        </StyledSection>
    );
};
