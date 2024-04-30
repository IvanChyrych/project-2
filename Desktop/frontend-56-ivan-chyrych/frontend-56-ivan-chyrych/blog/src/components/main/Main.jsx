import React from 'react'
import './index.scss'

export class Main extends React.Component {
  render () {
    return (

        <div className="main">
          {this.props.children}
          </div>

    )
  }
}
