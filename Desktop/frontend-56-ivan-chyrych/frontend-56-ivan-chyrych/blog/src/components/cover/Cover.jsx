import React from 'react'

export class Cover extends React.Component {
  render () {
    return (

        <div className="d-flex text-body-secondary">
          <img src={this.props.img} alt="" />
        </div>

    )
  }
}
