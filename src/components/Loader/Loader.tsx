import React, {FC} from 'react';
import {loader} from "../../assets/images";
import {StyledContainer, StyledLoading} from "./styledLoader";

export const Loader: FC = () => {
    return (
        <StyledContainer>
            <StyledLoading src={loader}/>
        </StyledContainer>
    );
};
