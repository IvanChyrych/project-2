import React from 'react'

export class Footer extends React.Component {
  render () {
    return (
      <footer className="footer bg-body-secondary p-3">
        <div className="d-flex text-body-secondary">
          <span>©2022 Blogfolio</span>
          <span className="ms-auto">All rights reserved</span>
        </div>
      </footer>
    )
  }
}
