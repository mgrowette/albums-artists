require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.CLOUDANT_URL)
// Switch to Cloudant ^^^

db
  .createIndex({
    index: { fields: ['type'] }
  })
  .then(() => console.log('Album type index created.'))
  .catch(err => console.log('Error creating album type index', err))

db
  .createIndex({
    index: { fields: ['name'] }
  })
  .then(() => console.log('Album name index created.'))
  .catch(err => console.log('Error creating type index.'))

db
  .createIndex({
    index: { fields: ['genre'] }
  })
  .then(() => console.log('Genre index created.'))
  .catch(err => console.log('Error creating genre index.'))

db
  .createIndex({
    index: { fields: ['year'] }
  })
  .then(() => console.log('Year index created.'))
  .catch(err => console.log('Error creating year index.'))
