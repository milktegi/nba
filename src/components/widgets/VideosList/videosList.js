import React, { Component } from 'react';
import styles from './videosList.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/buttons';

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
	};
	
	loadMore = () => {
		
	}
	
	renderButton = () => {
		return this.props.title ? 
		<Button
		type="loadmore"
		loadmore={()=> this.loadMore()}
		cta="더 많은 비디오 보기"
		/> 
		
		:
	  <Button 
		linkTo="/videos"
		cta="더 많은 비디오 보기" type="linkTo"/>
	
	}

  render() {
		return(
			<div className={styles.videoList_wrapper}>
				{this.renderTitle()}
				{this.renderButton()}
			</div>
		)
  }
}

export default VideosList;
