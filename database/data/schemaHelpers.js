const db = require('../index');

module.exports = {
  songSaver: (song, cb) => {
    // TBD: write code to generate a single song instance
    const stmt = `INSERT INTO songs (length, timestamp, isliked, songfile, title, artist, album, thumbnail) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)
              `;
    const songVals = [
      song.length,
      song.timestamp,
      song.isliked,
      song.songfile,
      song.title,
      song.artist,
      song.album,
      song.thumbnail,
    ];
    db.queryAsync(stmt, songVals)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  playlistSaver: (songid, playlist, cb) => {
    // TBD: write code to generate a single upNext play instance
    const stmt = `INSERT INTO ${playlist} (songid) 
               VALUES (?)
              `;
    const songVal = [songid];
    db.queryAsync(stmt, songVal)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  songGetter: (songid, cb) => {
    const stmt = `SELECT * FROM songs WHERE id = ?
                ORDER BY id ASC
                LIMIT 1
                `;
    const songVal = [songid];
    db.queryAsync(stmt, songVal)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
};
