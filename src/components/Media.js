import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Flex, Box } from 'reflexbox'
import data from '../data'
import _ from 'lodash'

class Media extends Component {

	constructor(props, context) {
	  super(props, context)
	  this.state = {
	  		data: ''
	  	}
	}

	componentWillMount () {
	  this.setState({
	    data: data
	  })
	}

	renderInfo(kind) {

		let current = this.props.gb ? parseInt(this.props.gb): 0
		let amount = '';
		let obj = this.state.data.data

	 	// var filtered = _.find(obj, {gb:current})

	 	var filtered = _.find(obj, function(o) { return o.gb >= current });
	 	
	 	if(filtered) {
	 	switch (kind) {
	 		case 'music':
	 			amount = filtered.music
	 			break;
	 		case 'video':
	 			amount = filtered.video
	 			break;
	 		case 'surf':
	 			amount = filtered.surf
	 			break;
	 	}
	 	return (
	 		amount
	 	)
	 }
	
	}

  render() {

    return (
		<Flex align='center' justify="center" wrap>
	    	<Box col={ 12 } lg={ 4 } sm={ 6 } p={ 2 }>
	    		<h2>Musik</h2>
	    		<p>Streama Spotify</p>
	    		<p className='amount'>{this.renderInfo('music')}</p>
	    	</Box>
	    	<Box col={ 12 } lg={ 4 } sm={ 6 } p={ 2 }>
	    		<h2>YouTube, SVT Play</h2>
	    		<p>Titta på video</p>
	    		<p className='amount'>{this.renderInfo('video')}</p>
	    	</Box>
	    	<Box col={ 12 } lg={ 4 } sm={ 6 } p={ 2 }>
	    		<h2>Surf</h2>
	    		<p>Surfa och maila</p>
	    		<p className='amount'>{this.renderInfo('surf')}</p>
	    	</Box>
		</Flex>
    	
    )
  }
}

export default Media