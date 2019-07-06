const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
// For deploy
// const path = require('path')

const app = express();

// Allow cross-origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// for deploy
// app.use(express.static('public'))

// For deploy - looking for index.html in public folder any time route is hit
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));