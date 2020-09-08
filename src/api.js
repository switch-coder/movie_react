import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a701abaa2f7ef6e6749a5504cc82fe24",
    language: "ko-KR",
  },
});

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};

export const movieApi = {
  upcomming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  nowPlaying: () => api.get("movie/now_playing"),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  showDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};
