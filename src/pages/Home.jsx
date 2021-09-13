import React from "react";

//Style
import styled from "styled-components";

// Components
import HeroBanner from "../components/HeroBanner";
import Features from "../components/Features";

/**
 * @name Home
 * @description Home page of the application
 * @param {object} props
 * @returns {JSX}
 */
function Home() {
  return (
    <div>
      <HeroBanner />
      <Features />
    </div>
  );
}

export default Home;
