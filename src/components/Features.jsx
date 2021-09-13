import React from "react";

//style
import styled from "styled-components";

// Components
import FeatureCard from "./FeatureCard";

// Data
import { featuresData } from "../data";

/**
 * @name Features
 * @description Features section of the Home page
 * @param {object} props
 * @returns {JSX}
 */
function Features() {
  return (
    <FeaturesSection>
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature, index) => (
        <FeatureCard
          name={feature.name}
          description={feature.description}
          icon={feature.icon}
          key={index}
        />
      ))}
    </FeaturesSection>
  );
}

// Styles

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

export default Features;
