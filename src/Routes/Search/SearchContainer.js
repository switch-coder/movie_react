import React from "react";
import SearchPresenter from "./SearchPreasenter";
import { tvApi, movieApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    showResults: null,
    searchTerm: "",
    error: null,
    loading: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({
        loading: true,
      });
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: showResults },
      } = await tvApi.search(searchTerm);
      console.log(movieResults, showResults);
      this.setState({
        movieResults,
        showResults,
      });
    } catch {
      this.setState({
        error: "결과를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };
  render() {
    const {
      movieResults,
      showResults,
      searchTerm,
      error,
      loading,
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        showResults={showResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
