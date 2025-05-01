const { MongoClient, ServerApiVersion } = require("mongodb");

let db;
const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.MDB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    db = client.db("nextProject");
    return db;
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
