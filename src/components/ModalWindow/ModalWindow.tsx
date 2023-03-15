import React, {FC} from 'react';
import {
    StyledBlockItems,
    StyledContainer,
    StyledImg,
    StyledItemContainer,
    StyledItems,
    StyledSection, StyledText, StyledTitle,
} from "./styledModalWindow";
import {useAppSelector} from "../../redux/hooks/hooks";
import {imgBasic} from "../../redux/api/api";

export const ModalWindow: FC = () => {
    const modalInfo = useAppSelector(state => state.movieReducer.modalInfo)
    const modalError = useAppSelector(state => state.movieReducer.modalError)
    return (
        <StyledSection>
            <StyledContainer>
                <StyledItems>
                    <StyledItemContainer>
                        <StyledBlockItems><StyledImg src={imgBasic + modalInfo.poster_path}/></StyledBlockItems>
                        <StyledBlockItems>
                            <StyledTitle>{modalInfo.title}</StyledTitle>
                            <StyledText style={{
                                color: modalError
                                    ? "Red"
                                    : "rgb(60, 236, 0)"
                            }}>
                                {modalError
                                    ? "Already added to favorites"
                                    : "Added to favorites"
                                }
                            </StyledText>
                        </StyledBlockItems>
                    </StyledItemContainer>
                </StyledItems>
            </StyledContainer>
        </StyledSection>
    );
};
