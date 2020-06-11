import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'public', 'images'),
    filename: (req, file, callback) => {
      crypto.randomBytes(6, (err, res) => {
        if (err) return callback(err);
        return callback(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
