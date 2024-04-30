import React, { useState } from 'react'
import { Header } from '../header/Header'
import { Main } from '../main/Main'
import { Title } from '../title/Title'
import { Footer } from '../footer/Footer'

export function Layout () {
  const [lang, setLang] = useState('en')

  function handleChangeLang (event) {
    setLang(event.target.value)
  }

  return (
      <>
        <Header value={lang} onChangeLang={handleChangeLang}/>
        <div >
          <Main>
            {/* <Title></Title> */}
            {/* {this.props.children} */}
          </Main>
        </div>
        <Footer />
      </>
  )
}
