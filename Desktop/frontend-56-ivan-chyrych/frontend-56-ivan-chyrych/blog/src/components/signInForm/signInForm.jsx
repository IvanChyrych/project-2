import { useState, useContext } from 'react'
import { LangContext } from '../../context/langContext'
import './index.scss'
import { text } from '../../config/text'

export const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const lang = useContext(LangContext)

  const handleClickSubmit = (event) => {
    event.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')
  }

  return (
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
  )
}
