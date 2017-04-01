import React from 'react'
import { Box } from 'reflexbox'
import { Button } from 'rebass'

const Affiliate = ({ name, imageurl, description, url }) => (
  <Box className='center' col={ 12 } md={6} lg={ 2 } sm={ 12 } p={ 2 }>
  	
  	<Box col={ 12 } mb={ 2 }>
  		<img className='logo' src={`${imageurl}`} alt={`${name}`} />
  	</Box>

  	<Button
  		href={`${url}`}
  	   backgroundColor='info'
  	   color='white'
  	   inverted
  	   pill
  	 >
  	   Skaffa abonnemang
  	 </Button>
  </Box>
)

export default Affiliate