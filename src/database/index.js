import mongoose from 'mongoose';
import dbs from '../config/database';
// import '../app/models';

const isProduction = process.env.NODE_ENV === 'production';
const dbURI = isProduction ? dbs.dbProduction : dbs.dbDevelopment;

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
