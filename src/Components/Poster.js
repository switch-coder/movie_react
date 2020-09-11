import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 5px;
  background-position: center center;
`;

const Title = styled.span`
  margin-bottom: 3px;
  margin-top: 10px;
  font-size: 1em;
  display: block;
  transition: opacity 100ms linear;
`;

const Rating = styled.span`
  opacity: 0;
  position: absolute;
  bottom: 5px;
  right: 5px;
  transition: opacity 100ms linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 3px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }

    ${Rating} {
      opacity: 1;
    }
  }
`;

const Year = styled.div`
  color: #bdc3c7;
  font-size: 0.8em;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../asset/noPoster.PNG")
          }
        />
        <Rating>
          <span>평점</span> {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
