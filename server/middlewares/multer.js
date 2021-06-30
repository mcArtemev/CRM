import multer, { diskStorage } from 'multer';
import path from 'path';

const storage = diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve('/img'));
  },
  filename(req, file, cb) {
    cb(null, `${req.body.name}-${Date.now()}.${req.body.format}`);
  }
});

export default multer({ storage });
