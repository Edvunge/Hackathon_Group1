const DB_NAME = "hack401"
const COLLECTION_NAME = "userStats"

const { MongoClient } = require("mongodb")
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"

let client
async function connectToMongo() {
    if (!client) {
        client = await new MongoClient(URL).connect()
    }
    return client
}

async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}

const aquioQueQueremosMeter = [
    { a: 3 },
    { a: 3 },
]

async function insertStats(stats, userID, date) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const newStat = await collection.insertOne({ ...stats, userID, date })
    return newStat.insertedId

}

// const users = [
//     { id: 3 },
// ]

aquioQueQueremosMeter.forEach(async item => {
    await insertStats(item, 3, "2022-2023")
})

console.log("DONE")