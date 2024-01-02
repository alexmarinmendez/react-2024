import TwitterFollowCard from './components/TwitterFollowCard'

const App = () => {
  const formatUserName = userName => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={formatUserName} userName='alexmarinmendez'>Alex Marin Mendez</TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName='facebook'>Meta</TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName='google'>Google</TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName='angular'>Angular</TwitterFollowCard>
    </section>
  )
}

export default App