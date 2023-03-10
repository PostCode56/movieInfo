import React, {FC} from 'react';
import {
    StyledContainer, StyledCountry, StyledGenre,
    StyledImg,
    StyledInfoItem,
    StyledItem, StyledOverview,
    StyledSection, StyledTagline, StyledText, StyledTextGenre,
    StyledTitle
} from "./styledMoviesCard";
import {useAppSelector} from "../../redux/hooks/hooks";
import {imgBasic} from "../../utils/fetchMoviesLink";
import {numberWithSpacesBudget, numberWithSpacesRevenue} from "../../utils/numberSpaces";

export const MoviesCard: FC = () => {
    const info = useAppSelector(state => state.movieReducer.info)
    const budget = useAppSelector(state => state.movieReducer.info.budget)
    const revenue = useAppSelector(state => state.movieReducer.info.revenue)
    const genre = useAppSelector(state => state.movieReducer.info.genres)
    return (
        <StyledSection>
            <StyledContainer>
                <StyledItem>
                    <StyledImg src={imgBasic + info.poster_path}/>
                </StyledItem>
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
                    <StyledText>Budget: {numberWithSpacesBudget(budget)}$</StyledText>
                    <StyledText>Popularity: {Math.round(info.popularity)}</StyledText>
                    <StyledText>Release date: {info.release_date}</StyledText>
                    <StyledText>Revenue: {numberWithSpacesRevenue(revenue)}$</StyledText>
                    <StyledText>Status: {info.status}</StyledText>
                    <StyledText>Runtime: {info.runtime} minutes</StyledText>
                    <StyledTagline>{info.tagline}</StyledTagline>
                    <StyledOverview>{info.overview}</StyledOverview>
                </StyledInfoItem>
            </StyledContainer>
        </StyledSection>
    );
};
