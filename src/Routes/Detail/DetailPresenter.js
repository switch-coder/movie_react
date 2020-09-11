import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import YT from "Components/YT";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  margin-bottom: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 100%;
  max-width: 560px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
`;

const Data = styled.div`
  margin-left: 30px;
`;

const Title = styled.span`
  font-size: 2.5em;
  font-weight: 500;
`;

const Divider = styled.span`
  padding: 0px 10px;
`;

const ItemContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  line-height: 2;
  font-size: 1.2em;
  width: 50%;
`;

const Item = styled.span`
  font-size: 1em;
  font-weight: 300;
`;

const ImdbIcon = styled.a`
  font-size: 1.2em;
  margin-left: 20px;
  border-radius: 5px;
  padding: 3px 7px 3px 7px;
  font-weight: 800;
  background-color: #f5c518;
  color: black;
`;

const Slide = styled.div`
  padding: 0px;
  margin-top: 0px;
  background-color: #596275;
  opacity: 0.8;
  width: 70%;
  height: 350px;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Tab = styled.div`
  margin-top: 50px;
  margin-bottom: 0px;
  /* height: 40px; */
  display: flex;
`;

const TabContent = styled.p`
  color: #f5c518;
  padding: 10px;
  text-align: center;
  background-color: #596275;
  font-size: 1.2em;
  font-weight: 500;
  border-bottom: solid 1px #f5c518;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  opacity: 0.8;
`;

const VideoContainer = styled.iframe`
  height: 300px;
  width: 400px;
`;

const Companies = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${result.poster_path}`
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../asset/noPoster.PNG")
          }
        />

        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          {result.imdb_id && (
            <ImdbIcon
              href={`https://www.imdb.com/title/${result.imdb_id}`}
              target="_blank"
            >
              IMDB
            </ImdbIcon>
          )}

          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>▪</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]}분
            </Item>
            <Divider>▪</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name}/`
                )}
            </Item>
            <Divider>▪</Divider>
            <Item>{result.vote_average && `⭐ ${result.vote_average}`}</Item>
          </ItemContainer>

          <Overview>{result.overview}</Overview>
          <Tab>
            <TabContent>trailer</TabContent>
            <TabContent>companies</TabContent>
          </Tab>
          <Slide>
            {result.videos.results &&
              result.videos.results.length > 0 &&
              result.videos.results.map((video) => (
                <VideoContainer
                  id={video.id}
                  key={video.id}
                  title={video.id}
                  src={`https://www.youtube.com/embed/${video.key}`}
                  allowFullScreen="allowFullScreen"
                  frameBorder="0"
                />
              ))}
          </Slide>

          <Tab>
            <TabContent>trailer</TabContent>
            <TabContent>companies</TabContent>
          </Tab>
          <Slide>
            {result.production_companies &&
              result.production_companies.length > 0 &&
              result.production_companies.map((companies) => (
                <Companies
                  bgImage={`https://image.tmdb.org/t/p/w300${companies.logo_path}`}
                ></Companies>
              ))}
          </Slide>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
