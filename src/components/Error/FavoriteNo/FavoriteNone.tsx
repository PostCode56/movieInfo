import React, {FC} from 'react';
import {StyledContainer, StyledImg, StyledItem, StyledSection, StyledTitle} from "../FavoriteNo/styledFavoriteNo";
import {favoriteNo} from "../../../assets/images";

export const FavoriteNo:FC = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledItem>
                    <StyledImg src={favoriteNo}/>
                    <StyledTitle>Favorite movies are not added to the list</StyledTitle>
                </StyledItem>
            </StyledContainer>
        </StyledSection>
    );
};
