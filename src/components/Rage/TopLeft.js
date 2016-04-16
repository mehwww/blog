import React, { Component, PropTypes } from 'react'

export default class TopLeft extends Component {
  render () {
    return (
      <path d='M 5 5 h 60 v 100 h -60 v -100'
        fill='transparent'
        stroke='#000'
        strokeWidth='3'
        strokeDasharray='0'
        strokeDashoffset='0'></path>
    )
  }
}
