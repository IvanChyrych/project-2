import { useState } from 'react'
import { text } from '../config/text/index'
import { Header } from '../../src/components/header/Header'
import { Title } from '../components/title/Title'

export function RegistrationConfirmationPage () {
  const [lang, setLang] = useState('en')
  function handleChangeLang (event) {
    setLang(event.target.value)
  }
  return (
    <>
      <Header value={lang} onChangeLang={handleChangeLang} />
      <div className="reg-confirm-form">
        <Title title={text[lang].registrationConfirmation.title} />
        <p>
          Please activate your account with the activation
          link in the email example@gmail.com.Please, check your email
        </p>

        <button
          className="btn btn-primary mt-2"
        >
          {text[lang].registrationConfirmation.goToHomeBtn}
        </button>
      </div>
    </>
  )
}
