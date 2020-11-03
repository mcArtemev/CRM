// Libraries import
import express from 'express'; // for files inside needed. что, {какие переменные} from откуда
import passport from 'passport';
// Files import
import router from './router';
import { server } from '../config';
import './db';
import { passportMiddlewares, session } from './middlewares';

const app = express();
passport.use(passportMiddlewares.localStrategy);
passport.serializeUser(passportMiddlewares.serializeUser);
passport.deserializeUser(passportMiddlewares.deserializeUser);
app
  .use(express.urlencoded())
  .use(passport.initialize())
  .use(session)
  .use('/api/v1', router)
  .use((error, req, res, next) => {
    return res.status(500).json({ error: error.toString() });
  });
app.listen(server.port, () => {
  console.info(`server start on ${server.port} port, http://localhost:${server.port}`);
});
