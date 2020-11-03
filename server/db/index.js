import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { server } from '../../config';
try {
  mongoose.connect(server.db.fullUrl(), { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.Promise = bluebird;
  mongoose.connection.on('open', () => {
    console.info('mongo connected');
  });
  mongoose.connection.on('error', error => {
    console.info('mongo error', error);
  });
} catch (error) {
  console.error(error);
}

export default mongoose.connection;
