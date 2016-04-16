import React, { Component, PropTypes } from 'react'
import style from './TopRight.css'

export default class TopRight extends Component {
  constructor (props) {
    super(props)
    this.state = {
      className: {
        rect: '',
        circle: ''
      }
    }
  }

  componentDidMount () {
    const rect = this.refs.rect
    const listener = (e) => {
      switch (e.type) {
        case 'animationstart':
          break
        case 'animationend':
          break
        case 'animationiteration':
          break
      }
    }
    rect.addEventListener('animationstart', listener, false)
    rect.addEventListener('animationend', listener, false)
    rect.addEventListener('animationiteration', listener, false)
  }

  rotating () {
    this.setState({
      className: {
        rect: style['rotating-rect'],
        circle: style['rotating-circle']
      }
    })
  }

  render () {
    return (
      <g>
        <path ref='rect' className={this.state.className.rect} d='M 75 55 v -50 h 100 v 100 h -100 v -50'
          fill='transparent'
          stroke='#000'
          strokeWidth='3'
          strokeDasharray='400'
          strokeDashoffset='0'></path>
        <path ref='circle'className={this.state.className.circle} d='M 75 55 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0'
          fill='transparent'
          stroke='#000'
          strokeWidth='3'
          strokeDasharray='314.159'
          strokeDashoffset='314.159'></path>
      </g>
    )
  }
}
