import React, {FC} from 'react';
import {
    StyledBackContainer,
    StyledContainer, StyledFavoriteContainer,
    StyledImg,
    StyledItems,
    StyledItemsContainer, StyledItemsContainerLogo,
    StyledLogo,
    StyledSection, StyledText
} from "./styledMovieCardHeader";
import {useNavigate} from "react-router-dom";
import {back} from "../../../assets/images";
import {FavoriteLink} from "../../index";

export const MovieCardHeader: FC = () => {
    const navigate = useNavigate();
    return (
        <StyledSection>
            <StyledContainer>
                <StyledItems>
                    <StyledItemsContainer>
                        <StyledBackContainer onClick={() => navigate(-1)}>
                            <StyledImg src={back}/>
                            <StyledText>Back</StyledText>
                        </StyledBackContainer>
                    </StyledItemsContainer>
                    <StyledItemsContainerLogo>
                        <StyledLogo>INFOMovie</StyledLogo>
                    </StyledItemsContainerLogo>
                    <StyledFavoriteContainer>
                        <FavoriteLink/>
                    </StyledFavoriteContainer>
                </StyledItems>
            </StyledContainer>
        </StyledSection>
    );
};
