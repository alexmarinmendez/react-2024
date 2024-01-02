import TwitterFollowCard from './components/TwitterFollowCard'

const App = () => {
  const formatUserName = userName => `@${userName}`
  const alexmarinmendez = { formatUserName, userName: 'alexmarinmendez' }

  return (
    <section className='App'>
      <TwitterFollowCard {...alexmarinmendez}>Alex Marin Mendez</TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing userName='facebook'>Meta</TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName='google'>Google</TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName='angular'>Angular</TwitterFollowCard>
    </section>
  )
}

export default App