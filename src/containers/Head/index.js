import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Rage from 'components/Rage'
import style from './style.css'

@connect()
export default class Head extends Component {
  render () {
    return (
      <header className={style.head}>
        <figure className={style.rage}>
          <Rage/>
        </figure>
        <h3 className={style.heading}>Nothing here but meh.</h3>
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/blog'>Blog</Link> */}
      </header>
    )
  }
}
