import React from 'react'
import ReactDOM from 'react-dom/client'

const createButton = ({ text }) => {
  return (
    <button>{text}</button>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    {createButton({ text: 'Me gusta' })}
    {createButton({ text: 'Otro me gusta' })}
  </React.Fragment>
)
