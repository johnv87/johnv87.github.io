export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'
export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME'

export const toggleNavbar = () => {
  return {
    type: TOGGLE_NAVBAR,
  }
}

export const toggleDakTheme = () => {
  return {
    type: TOGGLE_DARK_THEME,
  }
}
