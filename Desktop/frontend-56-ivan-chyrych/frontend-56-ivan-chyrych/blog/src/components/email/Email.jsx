import React from 'react'

export class Email extends React.Component {
  render () {
    return (
      <div className="form-group mb-10 ">
        <label
          htmlFor="exampleInputEmail1">Email address
        </label>
        <input
          type="email"
          className="form-control"
          // id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
    )
  }
}
