import React from "react";
import PropTypes from "prop-types";
import "./IllustratedContent.scss";

const IllustratedContent = ({ media, children }) => {
  return (
    <div className="illustrated-content">
      <div className="illustrated-content__media">{media}</div>
      <div className="illustrated-content__content">{children}</div>
    </div>
  );
};

IllustratedContent.propTypes = {
  media: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default IllustratedContent;
