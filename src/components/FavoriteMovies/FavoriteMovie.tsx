import React, {FC} from 'react';
import {
    StyledCard,
    StyledImg,
    StyledImgDelete,
    StyledList,
    StyledSection,
    StyledTitle,
    StyledTitleCard
} from "./styledFavoriteMovie";
import {Link} from "react-router-dom";
import {fetchInfoMovie} from "../../redux/api/api";
import {imgBasic} from "../../redux/api/api";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {deleteCard} from "../../assets/images";
import {deleteFavoriteMovie} from "../../utils/deleteFavoriteMovie";
import {FavoriteNo} from "../index";

export const FavoriteMovie: FC = () => {
    const arrayFavorite = useAppSelector(state => state.movieReducer.favorite)
    const dispatch = useAppDispatch();
    return (
        <StyledSection>
            <StyledTitle>My Favorite Movies</StyledTitle>
            {arrayFavorite.length === 0
                ? <FavoriteNo/>
                : <StyledList>
                    {arrayFavorite.map(res => (
                        <StyledCard key={res.id}>
                            <StyledImgDelete src={deleteCard}
                                             onClick={() => deleteFavoriteMovie(res.id, arrayFavorite, dispatch)}/>
                            <Link
                                style={{textDecoration: "none", color: "black"}}
                                to={`/info/${res.id}`}
                                key={res.id}
                                onClick={() => fetchInfoMovie(res.id, dispatch)}>
                                <StyledImg src={imgBasic + res.poster_path}/>
                                <StyledTitleCard>{res.title}</StyledTitleCard>
                            </Link>
                        </StyledCard>
                    ))}
                </StyledList>}
        </StyledSection>
    );
};
