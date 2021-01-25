import mongoose from 'mongoose';

const MONGODB_URI = `mongodb+srv://nosnart:${process.env.MONGODB_PW}@cluster0.awvy8.mongodb.net/<dbname>?retryWrites=true&w=majority`;

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

export default dbConnect;
