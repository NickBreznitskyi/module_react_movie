import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {MoviesPage} from "./pages";
import {MovieByGenrePage} from "./pages";
import {HomePage} from "./pages";
import {MovieSearchPage} from "./pages";
import {MovieInfoPage} from "./pages";
import {LayoutApp} from "./components";
import "./App.css";


const App: FC = () => {

    return (
        <div className={"App"}>
            <Routes>
                <Route path={'/'} element={ <LayoutApp/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={`search/:inputValue`} element={<MovieSearchPage/>}/>
                    <Route path={'movie/:original_title'} element={<MovieInfoPage/>}/>
                    <Route path={':genreName'} element={<MovieByGenrePage/>}/>
                    <Route/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};