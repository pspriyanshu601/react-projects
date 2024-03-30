import React from "react";
import PropTypes from 'prop-types';

import "./card.css";

const Card = ({ title, desc }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired
};

export default Card;
