import TwitterFollowCard from './components/TwitterFollowCard'

const App = () => {
  return (
    <section className='App'>
      <TwitterFollowCard userName='alexmarinmendez' name='Alex Marin Mendez' />
      <TwitterFollowCard isFollowing userName='facebook' name='Meta' />
      <TwitterFollowCard userName='google' name='Google' />
      <TwitterFollowCard userName='angular' name='Angular' />
    </section>
  )
}

export default App