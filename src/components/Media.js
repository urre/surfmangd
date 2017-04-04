import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'
import humanizeDuration from 'humanize-duration'

class Media extends Component {

	renderInfo(kind) {

		let current = this.props.gb ? parseInt(this.props.gb, 10): 0
		let amount = '';

	 	switch (kind) {
	 		case 'music':
	 			amount = humanizeDuration(current * 7.5 * (60*1000), { language: 'sv', round: true, units: ['h', 'm'] })
	 			break;
	 		case 'video':
	 			amount = humanizeDuration(current * 1.75 * (60*1000), { language: 'sv', round: true, units: ['h', 'm'] })
	 			break;
	 		case 'surf':
	 			amount = humanizeDuration(current * 3 * (60*1000), { language: 'sv', round: true, units: ['h', 'm'] })
	 			break;
	 		default:
	 			amount = humanizeDuration(current * 6 * (60*1000), { language: 'sv', round: true, units: ['h', 'm'] })
	 	}
	 	return (
	 		amount
	 	)

	}

  render() {

    return (
		<Flex align='center' justify='space-between' wrap mt={6}>
	    	<Box col={ 12 } md={6} lg={ 4 } sm={ 12 } p={ 2 }>
	    		<h2>Lyssna på musik</h2>
	    		<p>Exempelvis Spotify, Apple Music, Soundcloud</p>
	    		<p className='amount amount-music'>{this.renderInfo('music')}</p>
	    	</Box>
	    	<Box col={ 12 } lg={ 4 } sm={ 6 } p={ 2 }>
	    		<h2>Titta på video</h2>
	    		<p>Exempelvis YouTube, SVT Play, Netflix</p>
	    		<p className='amount amount-video'>{this.renderInfo('video')}</p>
	    	</Box>
	    	<Box col={ 12 } lg={ 4 } sm={ 6 } p={ 2 }>
	    		<h2>Surfa</h2>
	    		<p>Webbsidor, Instagram, Facebook, e-post osv</p>
	    		<p className='amount amount-surf'>{this.renderInfo('surf')}</p>
	    	</Box>
		</Flex>

    )
  }
}

export default Media
