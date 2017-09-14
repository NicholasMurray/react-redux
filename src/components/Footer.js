import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => (
  <div className="footer">
    <Link 
      className={props.filter === undefined ? 'selected' : '' } 
      to='/'>All</Link>
    <Link
      className={props.filter === 'active' ? 'selected' : '' } 
      to='/active'>Active</Link>
    <Link
      className={props.filter === 'completed' ? 'selected' : '' } 
      to='/completed'>Completed</Link>
  </div>
)