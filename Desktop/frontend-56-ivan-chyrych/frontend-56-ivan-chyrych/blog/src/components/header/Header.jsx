import React from 'react'
import { BsList } from 'react-icons/bs'

export function Header (props) {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand"><BsList /></span>

        <div className="navbar-nav flex-row">
          <a className="nav-link active px-3" aria-current="page" href="#">Home</a>
          <a className="nav-link px-3" href="#">Features</a>

          <select onChange={props.onChangeLang} value={props.lang} className="form-select" aria-label="Default select example">
            <option value='ru'>RU</option>
            <option value='en'>EN</option>
          </select>

        </div>
      </div>
    </nav>
  )
}
