import './styles/App.css'

const App = () => {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/github/alexmarinmendez" alt="" />
        <div className='tw-followCard-info'>
          <strong>Alex Marin Mendez</strong>
          <span className='tw-followCard-infoUserName'>@alexmarinmendez</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  )
}

export default App