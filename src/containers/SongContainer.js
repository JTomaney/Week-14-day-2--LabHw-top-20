import React from 'react';

class SongContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url)
      .then(res=> res.json())
      .then(songs => this.setState({songs: songs.feed.entry}))
      .catch(err => console.error)
  }

render() {
  return <p>uegfbdsnkkzjfn</p>
}

}

export default SongContainer;
