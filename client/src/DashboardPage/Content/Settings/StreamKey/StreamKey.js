import React from 'react'

export const StreamKey = (props) => {

    const {streamKey} = props;
  return (
    <div className='setting-stream-key-container'>
        <span>{streamKey}</span>
    </div>
  )
}
