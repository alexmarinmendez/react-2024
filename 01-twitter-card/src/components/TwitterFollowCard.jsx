import '../styles/TwitterFollowCard.css'

const TwitterFollowCard = ({ children, formatUserName, userName, isFollowing = false }) => {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/github/${userName}`} alt="" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard