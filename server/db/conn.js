const { MongoClient } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const _db;

module.exports = {
    connectToServer: (callback) => {
        client.connect((err, db) => {
            // Verify we got a good "db" object
            if (db)
            {
                _db = db.db("myFirstDatabse");
                console.log("Successfully connected to mongodb!")
            }
            return callback(err);
        });
    },

    getDb: () => {
        return _db;
    }
}