import React from 'react'

import { Layout } from '../components/layout/Layout'

export class SelectedPost extends React.Component {
  render () {
    return (
      <Layout >
        <div className="d-flex justify-content-center flex-column" >
          <h2 className='d-flex justify-content-center' >{this.props.title}</h2>
          <div className="w-100 d-flex justify-content-center">
            <img className='p-5 ' src={this.props.img} alt="" />
          </div>
          <div className=" w-100 d-flex justify-content-center">
            <p className='p-5'>{this.props.content}</p>
            </div>
        </div>
      </Layout>
    )
  }
}
