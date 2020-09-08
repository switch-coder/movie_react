import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  state = {
    upcomming: null,
    popular: null,
    nowPlaying: null,
    error: null,
    loading: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: upcomming },
      } = await movieApi.upcomming();
      this.setState({
        upcomming,
        popular,
        nowPlaying,
      });
    } catch {
      this.setState({
        error: "영화정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcomming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcomming={upcomming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
