import React, { Component } from 'react'

import { Flex, Box } from 'reflexbox'
import Slider from 'react-rangeslider'
import { Link, browserHistory } from 'react-router'

import appreset from '../../node_modules/app-reset/app-reset.css'
import 'react-rangeslider/lib/index.css'
import '../Styles.css'

import Media from './Media'

class Home extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      surfmangd: null,
      horizontal: 10,
      data: null
    }
  }

  componentDidMount () {
    this.getGb()
    this.checkHome()
  }

  checkHome() {
    browserHistory.listen( location =>  {
     if(location.pathname === '/') {
      this.setState({
        surfmangd: 5}, () => {
          this.updateUrl()
      }) 
     }
    })
  }

  getGb () {
    this.setState({
      surfmangd: parseInt( this.props.params.id ? this.props.params.id : 5, 10 )}, () => {
        this.updateUrl()
    })   
  }

  updateUrl() {
    browserHistory.push(`/data/${this.state.surfmangd}`)
  }

  handleOnComplete = (value) => {
    this.updateUrl()
  }

  handleOnChange = (value) => {
    this.setState({
      surfmangd: value,
      horizontal: value
    })

  }

  render() {

    let { surfmangd } = this.state
    const formatgb = value => value + ' gb'

    const horizontalLabels = {
        5: 'Snålt',
        10: 'Lite',
        20: 'Ganska mycket',
        50: 'Mycket',
        100: 'Supermycket'
      }

    return (

      <Flex p={ 4 } align='center' justify="center" wrap>

        <Box col={ 12 } lg={ 12 } sm={ 6 }>
          <h1><Link to="/">Surfmängd</Link></h1>
          <p>
            Vad räcker min data till?
          </p>
        </Box>
        <Box col={ 12 } lg={ 12 } sm={ 6 } py={ 4 }>
        
        <Slider
          min={0}
          max={100}
          step={5}
          format={formatgb}
          value={ surfmangd }
          labels={horizontalLabels}
          orientation="horizontal"
          onChange={this.handleOnChange}
          onChangeComplete={this.handleOnComplete}
        />
          <Box className='value' col={ 12 } py={ 2 }>
            { surfmangd }
          </Box>
        
          <Media gb={this.props.params.id} />

        </Box>

      </Flex>

    )
  }

}

export default Home