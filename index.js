import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = { hello: () => 'Hello world!' }

const app = express()
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))