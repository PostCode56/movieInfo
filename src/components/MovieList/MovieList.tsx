import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {StyledCard, StyledImg, StyledList, StyledSection, StyledTitle} from "./styledMovieList";
import {imgBasic} from "../../utils/fetchMoviesLink";
import {Link} from "react-router-dom";
import {fetchInfo} from "../../utils/fetchInfo";
import {ErrorSearch} from "../index";

export const MovieList: FC = () => {
    const movies = useAppSelector(state => state.movieReducer.movies.results)
    const dispatch = useAppDispatch();
    return (
        <StyledSection>
            {movies.length === 0
                ? <ErrorSearch/>
                : <StyledList>
                    {movies.map(res => (
                        <StyledCard key={res.id}>
                            <Link
                                style={{textDecoration: "none", color:"black"}}
                                to={`/info/${res.id}`}
                                key={res.id}
                                onClick={() => fetchInfo(res.id, dispatch)}>
                                <StyledImg src={imgBasic + res.poster_path}/>
                                <StyledTitle>{res.title}</StyledTitle>
                            </Link>
                        </StyledCard>
                    ))}
                </StyledList>}
        </StyledSection>
    );
};
