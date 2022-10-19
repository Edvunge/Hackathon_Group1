import { getAllStats, getStatsById, insertStats, updateStatsById } from "../data/userStats/stats"


async function findAllStats(userId) {
    const stats = await getAllStats(userId)
    return stats
}

async function findStatsById(id) {
    const stat = await getStatsById(id)
    return stat
}




async function filterStatsByDay(id) {
    const stat = await getStatsByDay(id)
    return stat
}
async function filterStatsByWeek(id) {
    const stat = await getStatsByWeek(id)
    return stat
}
async function filterStatsByMonth(id) {
    const stat = await getStatsByMonth(id)
    return stat
}




async function createStats(stats, userId) {
    const createdStat = await insertStats(stats, userId)
    return createdStat
}

async function changeStatById(stat, id) {
    const stat = await updateStatsById(stat, id)
    return stat
}

export {
    findAllStats,
    findStatsById,
    createStats,
    changeStatById,
    filterStatsByDay,
    filterStatsByWeek,
    filterStatsByMonth,
}