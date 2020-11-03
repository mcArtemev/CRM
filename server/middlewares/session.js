import expressSession from 'express-session';
import connectMongo from 'connect-mongo';

import mongoConnection from '../db';
import { server } from '../../config';

const MongoSessionStore = connectMongo(expressSession);

export default expressSession({
  store: new MongoSessionStore({
    mongooseConnection: mongoConnection,
    collection: 'sessions'
  }),
  secret: server.session.secret,
  resave: true,
  rolling: true, // почитать про это
  saveUninitialized: true, // почитать про это
  cookie: {
    maxAge: server.session.cookieMaxAge,
    path: '/', // почитать про это
    httpOnly: true,
    secure: false // почитать про это
  }
});
