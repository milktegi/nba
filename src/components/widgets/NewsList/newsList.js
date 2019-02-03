import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { URL } from '../../../config';


class NewsList extends Component {
	
	state = {
		items: [],
		start: this.props.start,
		end: this.props.start + this.props.amount,
		amount: this.props.amount
	}
	
	//WARNING! To be deprecated in React v17. Use componentDidMount instead.
	componentWillMount() {
		axios.get(`
		${URL}/articles?_start=${this.state.start}
		&_end=${this.state.end}
		`)
		.then(res => {
			this.setState({
				items: [...this.state.items, ...res.data]
			})
		})
	}
	
	
	
	render() {
		console.log(this.state.items);
		return (
			<div>
				
			</div>
		)
	}
}


export default NewsList;