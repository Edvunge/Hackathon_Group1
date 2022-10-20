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

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const aquiloQueQueremosMeter = [
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
    {
        timeSpent: randomIntFromInterval(0, 300),
        date: new Date(`2022-${randomIntFromInterval(01, 10).toString().padStart(2, '0')}-${randomIntFromInterval(01, 28).toString().padStart(2, '0')}T09:42:45.246Z`)
    },
]
console.log(aquiloQueQueremosMeter)

async function populateStats(stats, /* userID, */ date) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const newStat = await collection.insertOne({ ...stats, /* userID, date */ })
    return newStat.insertedId

}

// const users = [
//     { id: 3 },
// ]

aquiloQueQueremosMeter.forEach(async item => {
    await populateStats(item)
})

console.log(new Date())