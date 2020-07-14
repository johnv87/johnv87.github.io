import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDakTheme, toggleNavbar } from '../redux/actions/actions'

export const Navbar = () => {
  const navbarState = useSelector(state => state.navbarReducer)
  const themeState = useSelector(state => state.themeReducer)
  const dispatch = useDispatch()

  //HANDLE NAVBAR TOGGLE
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    const navbarTogglerLines = document.querySelectorAll('.hamburger-line')
    const navbarNav = document.querySelector('.navbar-nav')

    if (navbarState.isTogglerOn && window.innerWidth < 768) {
      navbar.classList.add('active')
      navbarNav.classList.add('active')
      navbarTogglerLines.forEach(e => e.classList.add('active'))
    } else {
      navbar.classList.remove('active')
      navbarNav.classList.remove('active')
      navbarTogglerLines.forEach(e => e.classList.remove('active'))
    }
    const windowResizeHandler = () => {
      if (window.innerWidth >= 768 && navbarState.isTogglerOn === true) {
        dispatch(toggleNavbar())
      }
    }
    window.addEventListener('resize', windowResizeHandler)

    return () => {
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [dispatch, navbarState])

  return (
    <header className='App-header'>
      <nav className='navbar navbar-dark bg-dark shadow-sm'>
        <div className='container-fluid'>
          <NavLink exact to={'/'} className='navbar-brand'>
            Ivan Vasyliev
          </NavLink>
          <div id='hamburger' onClick={() => dispatch(toggleNavbar())}>
            <span className='hamburger-line' />
            <span className='hamburger-line' />
            <span className='hamburger-line' />
          </div>
          <div className='navbar-nav navbar-expand-md'>
            <NavLink
              exact
              to={'/'}
              className='nav-link'
              onClick={() => {
                window.innerWidth < 768 && dispatch(toggleNavbar())
              }}
            >
              Home
            </NavLink>
            <NavLink
              to={'/about'}
              className='nav-link'
              onClick={() => {
                window.innerWidth < 768 && dispatch(toggleNavbar())
              }}
            >
              About
            </NavLink>
            <div className='form-check-inline form-switch'>
              <input
                type='checkbox'
                className='form-check-input'
                id='themeSwitcher'
                checked={themeState.isDarkThemeOn}
                onChange={() => dispatch(toggleDakTheme())}
              />
              <label
                className='form-check-label text-white'
                htmlFor='themeSwitcher'
              >
                Dark theme
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
