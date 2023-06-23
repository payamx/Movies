import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbartop from '../Navbar'
import Footer from "./Footer";


const Sharedlinks = () => {

    return (
        <>

            <div>

                <Navbartop/>

                <Outlet/>

                <Footer/>
            </div>

        </>


    )
}

export default Sharedlinks