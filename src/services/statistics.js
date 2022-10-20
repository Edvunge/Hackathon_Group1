import { deleteAllStats, getAllStats, getAllStatsBetweenDates, getStatsById, insertStats, updateStatsById } from "../data/userStats/stats"


async function findAllStats(userId) {
    const stats = await getAllStats(userId)
    return stats
}

async function findAllStatsBetweenDates(/* userId, */ startDate, endDate) {
    const stats = await getAllStatsBetweenDates(/* userId, */ startDate, endDate)
    return stats
}

async function findStatsById(id) {
    const stat = await getStatsById(id)
    return stat
}

async function findStatsByDate(date) {
    const stat = await getStatsByDate(date)
    return stat
}




async function filterStatsByDay(id) {
    const dayStat = await getStatsByDay(id)
    return dayStat
}
async function filterStatsByWeek(id) {
    const weekStat = await getStatsByWeek(id)
    return weekStat
}
async function filterStatsByMonth(id) {
    const monthStat = await getStatsByMonth(id)
    return monthStat
}




async function createStats(stats, /* userId, */ date) {
    const createdStat = await insertStats(stats, /* userId, */ date)
    return createdStat
}

async function deleteStats({}) {
    const createdStat = await deleteAllStats({})
    return createdStat
}

async function changeStatById(stat, id) {
    const newStat = await updateStatsById(stat, id)
    return newStat
}

export {
    findAllStats,
    findStatsById,
    createStats,
    changeStatById,
    filterStatsByDay,
    filterStatsByWeek,
    filterStatsByMonth,
    findAllStatsBetweenDates,
    deleteStats
}