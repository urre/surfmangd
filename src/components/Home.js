import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'
import Slider from 'react-rangeslider'
import { Link, browserHistory } from 'react-router'

import ReactGA from 'react-ga'

// eslint-disable-next-line
import appreset from '../../node_modules/app-reset/app-reset.css'
import 'react-rangeslider/lib/index.css'
import '../Styles.css'

import Media from './Media'
import Affiliates from './Affiliates'
import Footer from './Footer'

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

    setTimeout(() => {

      ReactGA.event({
        category: 'Data usage',
        action: 'Selected an data usage level',
        label: 'Gigabyte per month',
        value: parseInt(this.props.params.id, 10)
      })
    }, 1000)

    this.updateUrl()
  }

  handleOnChange = (value) => {
    this.setState({
      surfmangd: value,
      horizontal: value
    }, () => {
      this.updateUrl()
    })
  }

  render() {

    let { surfmangd } = this.state
    const formatgb = value => value + ' gb'

    const horizontalLabels = {
        2: '2 GB',
        5: '5 GB',
        10: '10 GB',
        20: '20 GB',
        50: '50 GB',
        100: '100 GB'
      }

    return (

      <Flex align='center' justify='space-between' wrap p={2}>

        <Box col={ 12 } lg={ 6 } sm={ 12 } p={ 3 }>
          <h1>
            <Link to="/">Surfmängd</Link>
          </h1>
          <p>Vad räcker min data till? *</p>
        </Box>

        <Box className='value' col={ 12 } lg={ 6 } sm={ 12 } p={ 3 }>
          { surfmangd }
        </Box>

        <Box className='sliderSection' col={ 12 } lg={ 12 } sm={ 12 } py={ 3 } px={2}>

        <h3>Justera surfmängd</h3>

          <Slider
            min={2}
            max={100}
            step={1}
            format={formatgb}
            value={ surfmangd }
            labels={horizontalLabels}
            orientation="horizontal"
            onChange={this.handleOnChange}
            onChangeComplete={this.handleOnComplete}
          />

          <Media gb={this.props.params.id} />
        </Box>

        {/* <Box col={ 12 }>
          <Affiliates />
        </Box> */}

        <Footer />

      </Flex>

    )
  }

}

export default Home
