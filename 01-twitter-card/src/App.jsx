import TwitterFollowCard from './components/TwitterFollowCard'

const App = () => {
  const formatUserName = userName => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={formatUserName} userName='alexmarinmendez' name='Alex Marin Mendez' />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName='facebook' name='Meta' />
      <TwitterFollowCard formatUserName={formatUserName} userName='google' name='Google' />
      <TwitterFollowCard formatUserName={formatUserName} userName='angular' name='Angular' />
    </section>
  )
}

export default App