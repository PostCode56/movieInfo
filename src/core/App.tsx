import React, {FC} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {Error, Main, InfoCardMovie,FavoriteMoviePage} from "../components";

const App: FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="" element={<Main/>}/>
                <Route path="info/:id" element={<InfoCardMovie/>}/>
                <Route path="favorite/" element={<FavoriteMoviePage/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </HashRouter>
    );
};

export default App;