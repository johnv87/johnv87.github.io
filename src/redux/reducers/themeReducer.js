import { TOGGLE_DARK_THEME } from '../actions/actions'

const initialState = JSON.parse(localStorage.getItem('theme')) || {
  isDarkThemeOn: false,
}
if (initialState.isDarkThemeOn === true) {
  document.body.classList.add('dark')
}

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      localStorage.setItem(
        'theme',
        JSON.stringify({ ...state, isDarkThemeOn: !state.isDarkThemeOn })
      )
      const raw = JSON.parse(localStorage.theme)

      raw.isDarkThemeOn
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark')
      return { ...state, isDarkThemeOn: !state.isDarkThemeOn }
    default:
      if (!localStorage.theme) {
        localStorage.setItem('theme', JSON.stringify(initialState))
      }
      return state
  }
}

export default themeReducer
