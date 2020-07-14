import React from 'react'
import { useSelector } from 'react-redux'

export default function GoToTopButton() {
  const themeSelector = useSelector(state => state.themeReducer)
  return (
    <button
      style={{ marginBottom: '4rem' }}
      className={
        themeSelector.isDarkThemeOn
          ? 'btn btn-outline-warning'
          : 'btn btn-success'
      }
      onClick={() => window.scrollTo({ top: 0 })}
    >
      Go to top
    </button>
  )
}
