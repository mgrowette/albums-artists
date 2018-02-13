require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_URL)

db
  .bulkDocs([
    {
      _id: 'album_hotel-california',
      name: 'Hotel California',
      genre: 'rock',
      year: '1976',
      artistId: 'artist_eagles',
      type: 'album'
    },
    {
      _id: 'album_kaiser-van-powderhorn-3',
      name: 'Kaiser van Powderhorn 3',
      genre: 'hip-hop',
      year: '2012',
      artistId: 'artist_prof',
      type: 'album'
    },
    {
      _id: 'album_send-away-the-tigers',
      name: 'Send Away the Tigers',
      genre: 'rock',
      year: '2007',
      artistId: 'artist_manic-street-preachers',
      type: 'album'
    },
    {
      _id: 'album_when-life-gives-you-lemons-you-paint-that-shit-gold',
      name: 'When Life Gives You Lemons You Paint That Shit Gold',
      genre: 'hip-hop',
      year: '2008',
      artistId: 'artist_atmosphere',
      type: 'album'
    }
  ])
  .then(response => console.log('success', resp))
  .catch(err => console.log('error', err))
