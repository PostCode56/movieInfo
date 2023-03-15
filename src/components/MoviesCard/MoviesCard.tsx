import React, {FC} from 'react';
import {
    StyledContainer, StyledCountry, StyledGenre,
    StyledImg, StyledImgFavorite,
    StyledInfoItem,
    StyledItemImg, StyledOverview,
    StyledSection, StyledTagline, StyledText, StyledTextGenre,
    StyledTitle
} from "./styledMoviesCard";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {imgBasic} from "../../redux/api/api";
import {numberWithSpacesBudget, numberWithSpacesRevenue} from "../../utils/numberSpaces";
import {addFavorite} from "../../assets/images";
import {addFavoriteList} from "../../utils/addFavoriteList";
import {ModalWindow} from "../index";

export const MoviesCard: FC = () => {
    const info = useAppSelector(state => state.movieReducer.info)
    const movies = useAppSelector(state => state.movieReducer.movies.results)
    const arrayFavorite = useAppSelector(state => state.movieReducer.favorite)
    const genre = useAppSelector(state => state.movieReducer.info.genres)
    const modalActive = useAppSelector(state => state.movieReducer.modalActive)
    const dispatch = useAppDispatch();
    return (
        <StyledSection>
            <StyledContainer>
                <StyledItemImg>
                    <StyledImgFavorite
                        src={addFavorite}
                        onClick={
                            () => addFavoriteList(info.id, movies, arrayFavorite, dispatch)}
                    />
                    <StyledImg src={imgBasic + info.poster_path}/>
                </StyledItemImg>
                <StyledInfoItem>
                    <StyledTitle>{info.title}</StyledTitle>
                    <StyledGenre>
                        {genre.map(res => (
                            <StyledTextGenre
                                key={res.id}>
                                {res.name}
                            </StyledTextGenre>
                        ))}
                    </StyledGenre>
                    <StyledCountry>Original language {info.original_language}</StyledCountry>
                    <StyledText>Budget: {numberWithSpacesBudget(info.budget)}$</StyledText>
                    <StyledText>Popularity: {Math.round(info.popularity)}</StyledText>
                    <StyledText>Release date: {info.release_date}</StyledText>
                    <StyledText>Revenue: {numberWithSpacesRevenue(info.revenue)}$</StyledText>
                    <StyledText>Status: {info.status}</StyledText>
                    <StyledText>Runtime: {info.runtime} minutes</StyledText>
                    <StyledTagline>{info.tagline}</StyledTagline>
                    <StyledOverview>{info.overview}</StyledOverview>
                </StyledInfoItem>
            </StyledContainer>
            {modalActive
                ? <ModalWindow/>
                : <></>}
        </StyledSection>
    );
};
