import React from "react";
import PropTypes from "prop-types";

const TitleComponent = ({ title }) => (
  <div className="title-wrapper">
    {title}
  </div>
);

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired
};
export default TitleComponent;
