import Buttons from "../src/components/button";
import MonthlyGraph from "../src/components/monthly";
import { Statistics } from "../src/components/statistic";
import { Stats } from "../src/components/stats";
import Graphs from "./graphs";

export default function Home() {

  return (

    <div>
      <Statistics />
      <title>Graphs and Statistics</title>
      <div>
        <h1>Welcome to graphs Page </h1>
      </div>

      <div>
      {/* <Buttons /> */}
      <MonthlyGraph />
      </div>

    </div>

  )
}

