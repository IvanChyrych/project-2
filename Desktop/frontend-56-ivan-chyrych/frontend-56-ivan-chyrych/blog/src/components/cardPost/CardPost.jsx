import React from 'react'

export class CardPost extends React.Component {
  componentDidMount () {
    console.log('Post mounted')

    this.timer = setInterval(() => {
      console.log(`Post ${this.props.id} ping`)
    }, 1000)
  }

  componentWillUnmount () {
    console.log(`Post ${this.props.id} unmounted`)

    clearInterval(this.timer)
  }

  render () {
    return (
      <div className="card" style={{ width: 'calc(100% / 3 - 0.5rem * 2)' }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    )
  }
}
