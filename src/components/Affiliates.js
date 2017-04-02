import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'

import Affiliate from './Affiliate'

class Affiliates extends Component {

  render() {

    return (
		<Flex className='affiliatesSection'  align='center' justify='space-between' mt={0} py={3} wrap>
			
			<Box className='center' col={ 12 } p={ 3 }>
				<h3>Populäraste abonnemangen</h3>
			</Box>

			<Affiliate name='Vimla' imageurl='https://res.cloudinary.com/urre/image/upload/v1490959449/vimla_f7hrlu.png' description='Mobilabonnemang med fastpris utan bindningstid' url='https://track.adtraction.com/t/t?a=1081333617&as=1177346381&t=2&tk=1' />
			<Affiliate name='Fello' imageurl='https://res.cloudinary.com/urre/image/upload/v1490959448/fello_kaztsd.png' description='Mobilabonnemang med sunt förnuft och schyssta villkor' url='https://www.fello.se/' />
			<Affiliate name='Halebop' imageurl='https://res.cloudinary.com/urre/image/upload/v1490959448/halebop_q3m39t.png' description='Den schyssta mobiloperatören' url='https://shop.halebop.se/mobilabonnemang' />
			<Affiliate name='Hallon' imageurl='https://res.cloudinary.com/urre/image/upload/v1490959449/hallon_asrw1k.png' description='Mobilabonnemang från din nya mobiloperatör' url='https://www.hallon.se/' />
			<Affiliate name='Telenor' imageurl='https://res.cloudinary.com/urre/image/upload/v1490959448/telenor_xzf83c.png' description='Den flexibla mobiloperatören' url='http://www.telenor.se/abonnemang/' />
		</Flex>
    	
    )
  }
}

export default Affiliates