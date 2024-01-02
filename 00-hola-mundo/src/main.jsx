import React from 'react'
import ReactDOM from 'react-dom/client'

const Button = ({ text }) => {
  return (
    <button>{text}</button>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Button text='Me gusta'></Button>
    <Button text='Otro me gusta'></Button>
  </React.Fragment>
)
