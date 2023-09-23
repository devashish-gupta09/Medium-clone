import React from "react";
// Components
import LandingPage from "./LandingPage";
import Grids from "./Grids";
import GridCard from "./GridCard";

const Home: React.FC = () => {
    return (
        <>
            <LandingPage />
            <hr />
            <Grids />
        </>
    );
}

export default Home;