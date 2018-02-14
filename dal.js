require('dotenv').config()

const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.CLOUDANT_URL)
const { pluck } = require('ramda')

const getAlbum = (id, cb) => db.get(id, cb)
const getArtist = (id, cb) => db.get(id, cb)

const getMusic = options =>
  db.allDocs(options).then(result => pluck('doc', result.rows)) // plucks the 'doc' property in our 'result.rows' property in our database.  Could also use map.

module.exports = { getAlbum, getArtist, getMusic }
