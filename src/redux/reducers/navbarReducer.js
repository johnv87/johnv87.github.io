import { TOGGLE_NAVBAR } from '../actions/actions'

const initialState = { isTogglerOn: false }

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return { ...state, isTogglerOn: !state.isTogglerOn }
    default:
      return state
  }
}

export default navbarReducer
