import React from 'react'

import { Layout } from '../components/layout/Layout'
import { GoToHomeButton } from '../components/goToHomeButton/GoToHomeButton'
import { Title } from '../components/title/Title'

export class SuccessPage extends React.Component {
  render () {
    return (
      <Layout >
        <div className='success-form'>
          <Title title='Success' />
          <div className="wrapper">
            <p>
              Email confirmed.
              Your registration is now completed
            </p>
            <GoToHomeButton />
          </div>
        </div>
      </Layout>
    )
  }
}
