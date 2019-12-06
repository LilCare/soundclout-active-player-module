import React from 'react';
import metaHelpers from '../metaHelpers';
import playerHelpers from '../playerHelpers';
import Play from './playerButtons/Play';
import Pause from './playerButtons/Pause';
import Button from './playerButtons/Button';
import Volume from './playerButtons/Volume';
import Player from './animatedPlayer/Player';
import InfoBar from './SongInfo/InfoBar';
import styles from '../cssModules/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      upNext: [],
      previousPlays: [],
      songFile: null,
      timestamp: 0,
      repeat: '',
      shuffle: '',
      volume: .7
    };
    this.mount = metaHelpers.mount.bind(this);
    this.back = playerHelpers.back.bind(this);
    this.togglePlay = playerHelpers.togglePlay.bind(this);
    this.tick = metaHelpers.tick.bind(this);
    this.next = playerHelpers.next.bind(this);
    this.shuffle = metaHelpers.shuffle.bind(this);
    this.repeat = metaHelpers.repeat.bind(this);
    this.scrub = playerHelpers.scrub.bind(this);
    this.like = metaHelpers.like.bind(this);
  }

  componentDidMount() { this.mount() }

  render() {
    const { upNext, songFile, timestamp, repeat, shuffle } = this.state;
    // className={styles.test}
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Button className="back" clickHandler={this.back} />

          {/* Render PLAY/PAUSE after the songFile object is generated in "metaHelpers.mount" */}
          {songFile && songFile.paused ? (
            <Play playSong={() => this.togglePlay(songFile)} />
          ) : (
            <Pause pauseSong={() => this.togglePlay(songFile)} />
          )}

          <Button className="next" clickHandler={this.next} />
          <Button className={`shuffle${shuffle}`} clickHandler={this.shuffle} />
          <Button className={`repeat${repeat}`} clickHandler={this.repeat} />

          <div className={styles.player}>
            {/* Render animated player after songFile object is generated in "metaHelpers.mount" */}
            {songFile
              && <Player length={upNext[0].length} timestamp={timestamp} scrub={this.scrub} />}
          </div>

          {/* Render Volume button after the songFile object is generated in "metaHelpers.mount" */}
          {songFile && <Volume songFile={songFile} />}
          <div className={styles.infoBar}>
            {upNext[0]
              && <InfoBar playerSong={upNext[0]} like={this.like} />}
          </div>
        </div>
      </footer>
    );
  }
}
export default App;
