import React from 'react'
import ReactDOM from 'react-dom/client'

const createButton = () => {
  return (
    <button>Me gusta</button>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    {createButton()}
    {createButton()}
  </React.Fragment>
)
