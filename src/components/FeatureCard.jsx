import React from "react";

//style
import styled from "styled-components";

// Assets
import chat from "../../public/icon-chat.png";
import money from "../../public/icon-money.png";
import security from "../../public/icon-security.png";

// Components

/**
 * @name FeatureCard
 * @description Feature card of section features
 * @param {object} Name, Description, Icon
 * @returns {JSX}
 */
function FeatureCard({ name, description, icon }) {
  const iconData = {};

  switch (icon) {
    case "chat":
      iconData.iconImage = chat;
      iconData.alt = "chat icon";
      break;
    case "money":
      iconData.iconImage = money;
      iconData.alt = "chat icon";
      break;
    case "security":
      iconData.iconImage = security;
      iconData.alt = "chat icon";
      break;
    default:
      console.log("icon not found");
      break;
  }

  return (
    <FeatureItem>
      <FeatureItemIcon src={iconData.iconImage} alt={iconData.alt} />
      <FeatureItemTitle>{name}</FeatureItemTitle>
      <p>{description}</p>
    </FeatureItem>
  );
}

// Styles

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureItemIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export default FeatureCard;
