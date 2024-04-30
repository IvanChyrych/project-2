import { useState } from 'react'
import { text } from '../config/text/index'
import { Header } from '../../src/components/header/Header'
import { Title } from '../components/title/Title'

export function SignInPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [lang, setLang] = useState('en')

  const handleClickSubmit = (event) => {
    event.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')
  }

  function handleChangeLang (event) {
    setLang(event.target.value)
  }

  return (
    <>
    <Header value={lang} onChangeLang={handleChangeLang}/>
      <div className="d-flex flex-column" >
        <Title title={text[lang].signIn.title} />
        <form onSubmit={handleClickSubmit}>
          <div className="form-group mb-10 ">
            <label
              htmlFor="exampleInputEmail1">{text[lang].signIn.form.email}
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group " >
            <label
            >{text[lang].signIn.form.password}</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div >
          <button
            type="submit"
            className="btn btn-primary mt-2">
            {text[lang].signIn.form.submit}
          </button>
        </form>
      </div>
    </>
  )
}
