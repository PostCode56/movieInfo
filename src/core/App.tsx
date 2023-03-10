import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Error, Main, InfoCardMovie} from "../components";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/info/:id" element={<InfoCardMovie/>}/>
                <Route path='/*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;