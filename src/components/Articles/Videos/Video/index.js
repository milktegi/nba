import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';

class VideoArticle extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  };

  componentWillMount() {
    axios
      .get(
        `
		${URL}/videos?id=${this.props.match.params.id}
		`
      )
      .then(response => {
        let article = response.data[0];

        axios.get(`${URL}/teams?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
          this.getRelated();
        });
      });
  }

  getRelated = () => {
    axios.get(`${URL}/teams`).then(response => {
      let teams = response.data;
      axios
        .get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
        .then(res => {
          this.setState({
            teams,
            related: res.data
          });
        });
    });
  };

  render() {
    const { article, team } = this.state;

    return (
      <div>
        <Header teamData={team[0]} />
        <div className={styles.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${article.url}`}
          />
        </div>
        <VideosRelated data={this.state.related} teams={this.state.teams} />
      </div>
    );
  }
}

export default VideoArticle;
