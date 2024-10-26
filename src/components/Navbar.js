import React from 'react'
import PropTypes from 'prop-types'
import { invertTheme } from '../utils/ui_theme_utils'


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`nav-link text-${invertTheme(props.mode)}`}   href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link text-${invertTheme(props.mode)}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${invertTheme(props.mode)}`} href="/">About</a>
              </li>
            </ul>
            <div className="form-check form-switch mx-3">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className={`form-check-label text-${invertTheme(props.mode)}`} for="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable' : 'Disable'} Dark Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
}