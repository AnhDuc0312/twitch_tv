import React from 'react'
import { ChannelCard } from './ChannelCard'

export const dummyChannels = [
    {
        id:1,
        title:"test",
        avatarUrl:null,
        username:"test1",
        isOnline:false
    },
    {
        id:2,
        title:"test2",
        avatarUrl:null,
        username:"test2",
        isOnline:true
    },
    {
        id:3,
        title:"test3",
        avatarUrl:null,
        username:"test3",
        isOnline:false
    },
    {
        id:4,
        title:"test",
        avatarUrl:null,
        username:"test4",
        isOnline:true
    },


]

export const Channels = () => {
  return (
    <div className='channels-container'>
        {dummyChannels.map(c => (
            <ChannelCard
            key={c.id}
            title={c.title}
            username={c.username}
            isOnline={c.isOnline}
            avatarUrl={c.avatarUrl}
            navigateToChannelHandler = {() => {}}
            
            />
    ))}
    </div>
  )
}
