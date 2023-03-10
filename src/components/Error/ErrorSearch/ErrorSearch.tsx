import React, {FC} from 'react';
import {StyledContainer, StyledItem, StyledSection, StyledImg, StyledTitle} from "./styledErrorSearch";
import {errorSearch} from "../../../assets/images";

export const ErrorSearch: FC = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledItem>
                    <StyledImg src={errorSearch}/>
                    <StyledTitle>Nothing was found for your query</StyledTitle>
                </StyledItem>
            </StyledContainer>
        </StyledSection>
    );
};
