import { useState, useContext } from 'react'
import './index.scss'
import { text } from '../../config/text/index'
import { LangContext } from '../../context/langContext'

export const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const lang = useContext(LangContext)

  const handleClickSubmit = (event) => {
    event.preventDefault()
    console.log(email, password, name, confirmPassword)
    setEmail('')
    setPassword('')
    setName('')
    setConfirmPassword('')
  }

  return (
        <form
            onSubmit={handleClickSubmit}
        >
            <div className="form-group mb-10 ">
                <label
                    htmlFor="exampleInputName"
                >{text[lang].signIn.form.name}
                </label>
                <input
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    type="name"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="nameHelp"
                    placeholder="Your name"
                />
            </div>
            <div className="form-group mb-10 ">
                <label
                    htmlFor="exampleInputEmail1">{text[lang].signUp.form.email}
                </label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
            </div>
            <div className="form-group " >
                <label>
                {text[lang].signUp.form.password}
                </label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                />
            </div >
            <div className="form-group ">
                <label
                    htmlFor="confirmPassword1"
                >
                    {text[lang].signUp.form.confirmPassword}
                </label>
                <input
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                    type="password"
                    className="form-control "
                    id="confirmPassword1"
                    placeholder="Confirm password"
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary mt-2"
            >
                {text[lang].signUp.form.submit}
            </button>
        </form>
  )
}
