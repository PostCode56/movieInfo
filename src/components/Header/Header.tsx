import React, {FC} from 'react';
import {
    StyledContainer, StyledInputContainer,
    StyledItems,
    StyledItemsContainer,
    StyledLink,
    StyledLogo,
    StyledSection
} from "./styledHeader";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {getFetchMoviesLink} from "../../utils/fetchMoviesLink";
import {Search} from "./Search/Search";

export const Header: FC = () => {
    const dispatch = useAppDispatch();
    const arrayLink = ["Drama", "Kids", "Best", "Popular"]
    const fetchMovie = (value: string, dispatch: any) => {
        getFetchMoviesLink(value, dispatch)
    }

    return (
        <StyledSection>
            <StyledContainer>
                <StyledItems>
                    <StyledItemsContainer>
                        <StyledLogo>INFOMovie</StyledLogo>
                        {arrayLink.map(value => (
                            <StyledLink
                                key={value}
                                name={value}
                                onClick={() => fetchMovie(value, dispatch)}
                            >{value}
                            </StyledLink>
                        ))}
                    </StyledItemsContainer>
                    <StyledInputContainer>
                        <Search/>
                        <StyledLink>Search</StyledLink>
                    </StyledInputContainer>
                </StyledItems>
            </StyledContainer>
        </StyledSection>
    );
};
