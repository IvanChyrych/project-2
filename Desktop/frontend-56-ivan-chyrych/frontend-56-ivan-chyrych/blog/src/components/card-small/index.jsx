import React from 'react'
import './index.scss'
import { Title } from '../title/Title'

export class CardSmall extends React.Component {
  render () {
    return (

      <div className="cardSmallContainer d-flex flex-column ">
        <Title title={this.props.title} className=""/>
        <img src={this.props.image} alt="" className='cardSmallImage' />
      </div>

    )
  }
}
