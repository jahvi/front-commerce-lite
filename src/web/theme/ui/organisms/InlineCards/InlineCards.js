import React from "react";
import PropTypes from "prop-types";
import "./InlineCards.scss";

const InlineCards = ({ children }) => {
  return <div className="inline-cards">{children}</div>;
};

InlineCards.propTypes = {
  children: PropTypes.node.isRequired
};

export default InlineCards;
