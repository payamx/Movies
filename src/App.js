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

function App() {



    return (
        <div>
                    <BrowserRouter >
                                <Routes>
                                    <Route path="Movies"  element={<SharedLinks/>} >
                                        <Route  index  element={<Home/>}/>
                                        <Route  path="movies/:cardId" element={<SingleCard/>}/>
                                        <Route  path=":newId" element={<GenreCardList/>}/>
                                        <Route  path="login" element={<Login/>}/>
                                        <Route  path="signup" element={<Signup/>}/>
                                        <Route  path="*" element={<h1>error page</h1>}/>
                                    </Route>
                                </Routes>

                    </BrowserRouter>



        </div>
    );
}

export default App;
