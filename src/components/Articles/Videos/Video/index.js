import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../articles.css';
import Header from './header';

class VideoArticle extends Component {


	state = {
		articles: [],
		team: []
	}

	//WARNING! To be deprecated in React v17. Use componentDidMount instead.
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
        });
      });
	}

	render() {
		
		const { article, team } = this.state;

		return(
			<div>
				<Header 
				teamData={team[0]}
				/>
				video article
			</div>
		)
	}
}

export default VideoArticle;