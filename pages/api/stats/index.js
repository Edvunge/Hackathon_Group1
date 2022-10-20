import { getSessionByToken } from "../../../src/data/login/userSessions";

import {
  getDayOfWeek,
  getMonths,
  getWeek,
  sameDay,
} from "../../../src/services/common";
import {
  changeStatById,
  createStats,
  deleteStats,
  findAllStatsBetweenDates,
  findStatsById,
} from "../../../src/services/statistics";

export default async function handler(req, res) {
  if (req.method === "GET") {
/*     if(!req.headers['authorization']) {
      res.status(401).send({});
    }
    const session = await getSessionByToken(req.headers["authorization"]); */

    let result = {};
    const initialDate = req.query.value.split(",")[0].trim();
    const finalDate = req.query.value.split(",")[1].trim();

    const stats = await findAllStatsBetweenDates(
      //session.userId,
      initialDate,
      finalDate
    );
    stats.forEach((stat) => {
      let interval = undefined;

      if (req.query.type === "daily") {
        interval = getDayOfWeek(stat["date"].getUTCDay());
      }
      if (req.query.type === "weekly") {
        interval = getWeek(stat["date"]);
      }
      if (req.query.type === "monthly") {
        interval = getMonths(stat["date"].getUTCMonth());
      }

      if (interval in result) {
        result[interval] = result[interval] + stat["timeSpent"];
      } else {
        result[interval] = stat["timeSpent"];
      }
    });

    res.status(200).json(result); 
  } else {
    res.status(404);
  }
  if (req.method === "POST") {
    //const session = await getSessionByToken(req.headers["authorization"]);
    const date = new Date();
    const stat = await createStats(req.body, /* session.userId, */ date);
    res.status(201).json(stat);
  } else {
    res.status(404);
  }

  if (req.method === "DELETE") {
    //const session = await getSessionByToken(req.headers["authorization"]);
    const stat = await deleteStats({});
    res.status(201).json({});
  } else {
    res.status(404);
  }

  if (req.method === "PATCH") {
    if(!req.headers['authorization']) {
      res.status(401).send({});
    }
    const session = await getSessionByToken(req.headers["authorization"]);

    let stat = await findStatsById(req.query.id);

    if (!session || session.userId !== stat.userId) {
      res.status(401).send({});
    }
    stat["timeSpent"] += req.body.timeSpent;
    res.status(200).json(await changeStatById(stat, req.query.id));

    //const updateStat = await sameDay(date, statId._id.getTimestamp())
    //console.log('timestamp', statId._id.getTimestamp())
    /*    if (updateStat) {
      const newStat = req.body + 
    const newStat = await updateStatsById()
    }  */
  }
}
