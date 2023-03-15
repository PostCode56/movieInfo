import React, {FC} from 'react';
import {StyledFavoriteContainer, StyledImg, StyledLinkFavorite, StyledText} from "./styledFavorite";
import {Link} from "react-router-dom";
import {favorite} from "../../../assets/images";
import {useAppSelector} from "../../../redux/hooks/hooks";

export const FavoriteLink: FC = () => {
    const likeCount = useAppSelector(state => state.movieReducer.favorite)
    return (
        <StyledFavoriteContainer>
            <Link
                style={{textDecoration: "none", color: "White"}}
                to="/favorite">
                <StyledImg
                    src={favorite}
                    alt="favoriteImg"/>
                <StyledText>{likeCount.length}</StyledText>
                <StyledLinkFavorite>Favorite</StyledLinkFavorite>
            </Link>
        </StyledFavoriteContainer>
    );
};
