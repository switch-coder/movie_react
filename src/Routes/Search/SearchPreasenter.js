import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: solid 2px #7f8c8d;
`;

const SearchPresenter = ({
  movieResults,
  showResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="티비 프로그램이나 영화를 입력해주세요"
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date.slice(0, 4)}
              />
            ))}
          </Section>
        )}
        {showResults && showResults.length > 0 && (
          <Section title="TV Results">
            {showResults.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date.slice(0, 4)}
              />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message text={error} />}
    {showResults &&
      movieResults &&
      showResults.lenght === 0 &&
      movieResults === 0 && <Message text="Nothing found" color="#ecf0f1" />}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  showResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};
export default SearchPresenter;
