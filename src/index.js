/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import fileupload from 'express-fileupload';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import dbConnect from './database';
import graphQlSchema from './graphql/schema';
import graphQlResolvers from './graphql/resolvers';
import Authorization from './middlewares/authorization';

const app = express();
dbConnect();

app.use(Authorization);

app.enable('trust proxy');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ' *');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileupload({ useTempFiles: true }));

app.use('/graphql', graphqlHTTP({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
