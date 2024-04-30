import React from 'react'
import './index.scss'
import { Layout } from '../layout/Layout'
import { Title } from '../title/Title'

export class CardMedium extends React.Component {
  render () {
    return (

        <div className=" d-flex flex-column">
          <Title title='Blog' />
          <div className="cardMediumContainer">
            <div className="cardMediumTitle">
            {this.props.title}
          </div>
            <img src={this.props.image} alt="" className='cardMediumImage' /></div>
        </div>

    )
  }
}
