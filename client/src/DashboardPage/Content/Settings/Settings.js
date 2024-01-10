import React from 'react'
import { StreamKey } from './StreamKey'
import { ChannelSettings } from './ChannelSettings'

const channelSettings = {
    title: 'title',
    description: 'description',
    avatarUrl:'none',
    username: 'Tets',
    streamKey: '1234',
}

export const Settings = () => {
  return (
    <div className='settings-container'>
        <span>Settings</span>
        <ChannelSettings settings = {channelSettings}/>
        <StreamKey streamKey = {channelSettings.streamKey}/>
        
    </div>
  )
}
