import React from 'react'

const imageUrl = 'https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(22).jpg'

const ChannelAvatar = ({ url }) => {
    return (
        <div className='channels-avatar-container'>
            <img src={url || imageUrl} width="100%" height="100%" alt=''/>
        </div>
    )
}
export const ChannelCard = ({
    id,
    title,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler,
}) => {

    const handleNavigate = () => {
        navigateToChannelHandler()
    }

  return (
    <div className='channels-card' onClick={handleNavigate}>
        <ChannelAvatar url={avatarUrl}/>
        <span className='channels-card-title'>{title}</span>
        <span className='channels-card-text'>{username}</span>
        <span className='channels-card-text' style={{color : isOnline ? "green" : "red"}}>
            {isOnline ? 'Online' : 'Offline'}
        </span>

    </div>
  )
}
