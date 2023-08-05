import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SharedLinks from "./Component/SharedLinks";
import Login from "./Page/Login"
import SingleCard from "./Component/SingleCard";
import Signup from "./Page/Signup";
import GenreCardList from "./Component/GenreCardList";
import Home from "./Page/Home";
import Links from "./Component/DownloadLink";

function App() {



    return (
        <div>
                    <BrowserRouter >

                        <Routes>
                            <Route element={<SharedLinks/>} >
                                <Route  path="/react-test/" index element={<Home/>}/>
                                <Route path="/react-test/movies/:cardId" element={<SingleCard/>}/>
                                <Route path="/react-test/:newId" element={<GenreCardList/>}/>
                                <Route path="/react-test/login" element={<Login/>}/>
                                <Route path="/react-test/signup" element={<Signup/>}/>
                                <Route path="*" element={<h1>error page</h1>}/>

                            </Route>

                        </Routes>

                    </BrowserRouter>



        </div>
    );
}

export default App;
