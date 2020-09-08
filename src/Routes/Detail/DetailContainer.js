import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: push,
    } = this.props;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return push("/");
    }

    const { isMovie } = this.state;
    try {
      let result = null;
      if (isMovie) {
        ({ data: result } = await movieApi.showDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
      this.setState({ result });
    } catch {
      this.setState({ error: "결과를 찾을 수 없습니다." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(result);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
