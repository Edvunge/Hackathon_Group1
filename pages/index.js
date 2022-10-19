import Buttons from "../src/components/button";
import { MainNavBar } from "../src/components/mainNavBar";
import { Statistics } from "../src/components/statistic";
import { Stats } from "../src/components/stats";

export default function Home() {

  return (

    <div>

      <title>Hackhaton</title>

      <div>

        <MainNavBar />

        <h1>Welcome to our Page</h1>

      </div>

      <div>

        <Buttons />
      
      </div>

    </div>

  )
}