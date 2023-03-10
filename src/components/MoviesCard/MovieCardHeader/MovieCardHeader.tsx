import React, {FC} from 'react';
import {StyledContainer, StyledImg, StyledItems, StyledItemsContainer, StyledSection} from "./styledMovieCardHeader";
import {Link} from "react-router-dom";
import {back} from "../../../assets/images";

export const MovieCardHeader: FC = () => {
    return (
        <div>
            <StyledSection>
                <StyledContainer>
                    <StyledItems>
                        <StyledItemsContainer>
                            <Link
                                to="/movieInfo">
                                <StyledImg src={back}/>
                            </Link>
                        </StyledItemsContainer>
                    </StyledItems>
                </StyledContainer>
            </StyledSection>
        </div>
    );
};
