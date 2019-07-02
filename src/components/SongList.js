import React, {Fragment} from 'react'
import SongDetail from './SongDetail'

const SongList = ({songs}) => {
  const songNode = songs.map((song) => {
    return <SongDetail title={song.title.label}/>
  })
  return <Fragment>{songNode}</Fragment>
}

export default SongList;
