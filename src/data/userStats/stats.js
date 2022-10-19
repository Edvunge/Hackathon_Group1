import { getMongoCollection } from "../mongodb"
import { ObjectId } from "mongodb"


const DB_NAME = "hack401"
const COLLECTION_NAME = "userStats"


async function getAllStats(userId) {
    // console.log(userId)
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find({ userID: userId }).toArray()
}


async function getStatsById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(id) }).getTimestamp()
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







async function insertStats(stats, userID) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.insertOne({ ...stats, userID })
}


async function updateStatsById(stats, id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...stats } })
}

export {
    getAllStats,
    getStatsById,
    insertStats,
    updateStatsById
}