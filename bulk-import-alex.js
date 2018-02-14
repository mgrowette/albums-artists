require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.CLOUDANT_URL)

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
    },
    {
      _id: 'artist_atmosphere',
      name: 'Atmosphere',
      country: 'USA',
      founded: '1989',
      description:
        'Atmosphere is an American hip hop duo from Minneapolis, Minnesota, consisting of rapper Slug (Sean Daley) and DJ/producer Ant (Anthony Davis). Since its formation in 1989, the group has released eight studio albums and ten extended plays',
      type: 'artist'
    },
    {
      _id: 'artist_eagles',
      name: 'Eagles',
      country: 'USA',
      founded: '1971',
      description:
        "The Eagles are an American rock band formed in Los Angeles in 1971. The founding members were Glenn Frey (guitars, vocals), Don Henley (drums, vocals), Bernie Leadon (guitars, vocals) and Randy Meisner (bass guitar, vocals). With five number-one singles, six Grammy Awards, five American Music Awards, and six number-one albums, the Eagles were one of the most successful musical acts of the 1970s. At the end of the 20th century, two of their albums, Their Greatest Hits (1971–1975) and Hotel California, were ranked among the 20 best-selling albums in the United States according to the Recording Industry Association of America. Hotel California is ranked 37th in Rolling Stone's list of The 500 Greatest Albums of All Time and the band was ranked number 75 on the magazine's 2004 list of the 100 Greatest Artists of All Time.",
      type: 'artist'
    },
    {
      _id: 'artist_manic-street-preachers',
      name: 'Manic Street Preachers',
      country: 'Wales',
      founded: '1986',
      description:
        'A Welsh rock band, formed in 1986 in Blackwood, Caerphilly and consisting of James Dean Bradfield (lead vocals, lead guitar), Nicky Wire (bass guitar, lyrics) and Sean Moore (drums, percussion, soundscapes). They are often colloquially known as the Manics.'
    },
    {
      _id: 'artist_prof',
      name: 'Prof',
      country: 'USA',
      founded: '2000',
      description:
        "Jacob Anderson (born April 29, 1984), better known by his stage name Prof, is an American rapper, singer, and songwriter based in Minneapolis, Minnesota. He released his first full-length album, Project Gampo, in 2007 and has since released two additional albums and three EPs. In 2012, City Pages named Prof on their list of Minnesota's 20 best rappers.[3] A co-owner of Stophouse Music Group, Prof signed to Rhymesayers Entertainment in late 2013.",
      type: 'artist'
    }
  ])
  .then(response => console.log('success', response))
  .catch(err => console.log('error', err))
