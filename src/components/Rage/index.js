import React, { Component, PropTypes } from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'
import Bottom from './Bottom'

export default class Rage extends Component {
  componentDidMount () {
    const tr = this.refs.tr
    setTimeout(() => tr.rotating(), 2000)
  }

  render () {
    return (
      <svg width='60' height='60' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <TopLeft ref='tl'/>
        <TopRight ref='tr'/>
        <Bottom ref='b' />
      </svg>
    )
  }
}
