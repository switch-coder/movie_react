import React from "react";
import PropTypes from "prop-types";
import Iframe from "react-iframe";
import styled from "styled-components";

const Container = ({ ytId, key, size, name, type }) => (
  <Iframe
    url={`http://www.youtube.com/embed${key}`}
    width="200px"
    height="150px"
    id={ytId}
    className="myClassname"
    display="initial"
    position="relative"
  />
);

Container.propTypes = {
  key: PropTypes.string,
  ytId: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default Container;
