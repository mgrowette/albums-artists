require('dotenv').config()

const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_URL)

const getAlbum = (id, cb) => db.get(id, cb)
const getArtist = (id, cb) => db.get(id, cb)

module.exports = { getAlbum, getArtist }
