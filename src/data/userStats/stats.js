import { getMongoCollection } from "../mongodb"
import { ObjectId } from "mongodb"


const DB_NAME = "hack401"
const COLLECTION_NAME = "userStats"


async function getAllStats(userId) {
    // console.log(userId)
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find({ userID: userId }).toArray()
}

async function getAllStatsBetweenDates(/* userId, */ startDate, endDate) {
    // console.log(userId)
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find({ /* userID: userId, */ date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
    }, }).toArray()

}


async function getStatsById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(id) })
}

async function getStatsByDate(date) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne(date)
}




async function getStatsByDay(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.aggregate([
            
    ])
}
async function getStatsByWeek(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.aggregate([
        { _id: new ObjectId(id) }]
        )
}
async function getStatsByMonth(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.aggregate([
        { _id: new ObjectId(id) }]
        )
}







async function insertStats(stats, userID, date) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const newStat = await collection.insertOne({ ...stats, userID, date })
    return getStatsById(newStat.insertedId)

}


async function updateStatsById(stats, id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...stats } })
    return getStatsById(id)
}

export {
    getAllStats,
    getStatsById,
    insertStats,
    updateStatsById,
    getAllStatsBetweenDates
}