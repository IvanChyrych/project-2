import React from 'react'
import './index.scss'
import { Layout } from '../layout/Layout'
import { Title } from '../title/Title'

export class CardLarge extends React.Component {
  render () {
    return (

        <div className="cardLargeContainer flex-column" >
          <Title title='Blog' />
          <div className="d-flex"><div className="wrapper">
            <div className="title">
              {this.props.title}
            </div>
            <div className="discription">{this.props.text}
            </div>
          </div>

            <div className="photo">
              <img src={this.props.image} alt="" />
            </div></div>

        </div>

    )
  }
}
