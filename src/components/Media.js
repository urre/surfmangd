import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'
import humanizeDuration from 'humanize-duration'

const FACTORS = {
	MUSIC: 7.5,
	VIDEO: 1.5,
	SURF: 3,
}

class Media extends Component {

	calculateTime(kind, period) {
		const dataSize = this.props.gb ? parseInt(this.props.gb, 10): 0
		const seconds = (period === 'day') ? (60*1000) : (60*1000) * 30

		return humanizeDuration(dataSize * kind * seconds, { language: 'sv', round: true, units: ['h', 'm'] })
	}

  render() {

    return (
		<Flex align='center' justify='space-between' wrap mt={6}>
	    	<Box col={ 12 } md={6} lg={ 4 } sm={ 12 } p={ 2 }>
					<h2>Lyssna på musik</h2>
	    		<p>Exempelvis Spotify, Apple Music, Soundcloud</p>
	    		<p className='amount amount-music'>{this.calculateTime(FACTORS.MUSIC, 'day')}/dag
	    			<small>{this.calculateTime(FACTORS.MUSIC, 'month')}/månad</small>
					</p>
	    	</Box>
	    	<Box col={ 12 } lg={ 4 } sm={ 6 } p={ 2 }>
	    		<h2>Titta på video</h2>
	    		<p>Exempelvis YouTube, SVT Play, Netflix</p>
	    		<p className='amount amount-video'>{this.calculateTime(FACTORS.VIDEO, 'day')}/dag
	    		<small>{this.calculateTime(FACTORS.VIDEO, 'month')}/månad</small>
					</p>
	    	</Box>
	    	<Box col={ 12 } lg={ 4 } sm={ 6 } p={ 2 }>
	    		<h2>Surfa</h2>
	    		<p>Webbsidor, Instagram, Facebook, e-post osv</p>
	    		<p className='amount amount-surf'>{this.calculateTime(FACTORS.SURF, 'day')}/dag
	    		<small>{this.calculateTime(FACTORS.SURF, 'month')}/månad</small>
					</p>
	    	</Box>
		</Flex>

    )
  }
}

export default Media
