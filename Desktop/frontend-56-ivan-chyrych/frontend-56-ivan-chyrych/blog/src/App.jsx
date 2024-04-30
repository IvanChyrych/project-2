import './styles.scss'
import { LangContext } from './context/langContext'
import { Posts } from './pages/Posts'
import { SignUpPage } from './pages/SignUpPage'
import { SuccessPage } from './pages/SuccessPage'
import { SelectedPost } from './pages/SelectedPost'
import { SignInPage } from './pages/SignInPage'
import { RegistrationConfirmationPage } from './pages/RegistrationConfirmationPage'
import { SearchResultsPage } from './pages/SearchResultsPage'
import { useState } from 'react'
import { Header } from './components/header/Header'

export function App () {
  const [lang, setLang] = useState('en')

  return (
    <LangContext.Provider value={lang}>
      {/* <Header value={lang} onChangeLang={handleChangeLang}/> */}
      {/* <SearchResultsPage /> */}
      {/* <Posts /> */}
      <RegistrationConfirmationPage />
      <SignInPage />
      <SignUpPage />
      {/* <SuccessPage /> */}
      {/* <SelectedPost
        title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
        img='https://i.ibb.co/2vd7DRk/Group-1459.png'
        content='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight'
      /> */}
    </LangContext.Provider>

  )
}
