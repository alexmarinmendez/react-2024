import TwitterFollowCard from './components/TwitterFollowCard'

const App = () => {
  return (
    <section className='App'>
      <TwitterFollowCard userName='alexmarinmendez' name='Alex Marin Mendez' />
      <TwitterFollowCard userName='facebook' name='Meta' />
    </section>
  )
}

export default App