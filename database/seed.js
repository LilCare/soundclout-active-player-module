const Promise = require('bluebird');
const faker = require('faker');
const schema = Promise.promisifyAll(require('./data/schemaHelpers'));

const seedData = () => {
  for (let i = 0; i < 100; i += 1) {
    let sampleSong = {
      length: Math.floor(Math.random() * (210 - 100) + 100),
      timestamp: 0,
      isliked: Math.floor(Math.random() * 2),
      songfile: faker.internet.url(),
      title: faker.random.words(),
      artist: faker.name.findName(),
      album: faker.commerce.productName(),
      thumbnail: faker.image.imageUrl(),
    };
    schema.songSaverAsync(sampleSong)
      .then((results) => schema.playlistSaverAsync(results.insertId, 'upnext'))
      .then((results) => console.log('upNextGeneratorAsync result', results))
      .catch((err) => console.log('upNextGeneratorAsync err', err));
  }
};

seedData();
