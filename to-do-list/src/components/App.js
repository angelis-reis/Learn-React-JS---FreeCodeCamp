import React from "react"

import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

import "../styles/Style.css"

function App(){

    const firstName="Frederico"
    const lastName="Reis"
    return(
        <div>
            {/* <Header/>,
            <Main/>,
            <Footer/>    */}

            <h1>Helo {'${firstName} !</h1>


        </div>     
    )
}

export default App