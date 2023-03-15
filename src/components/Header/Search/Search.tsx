import React, {FC, useState} from 'react';
import {StyledSearch} from "./styledSearch";
import {useAppDispatch} from "../../../redux/hooks/hooks";
import {fetchSearch} from "../../../redux/api/api";

export const Search: FC = () => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const searchMovies = (e: any) => {
        if (e.key == "Enter") {
            fetchSearch(search, dispatch)
            setSearch("")
        }
    }

    return (
        <StyledSearch
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMovies}
        />
    );
};
