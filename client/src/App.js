import React from "react";

import HeaderComponent from "./components/Header";
import MainComponent from "./components/Main";
import FooterComponent from "./components/Footer";

import "./css/App.css";

const App = () => {
    return (
        <div className="App">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
}

export default App;
