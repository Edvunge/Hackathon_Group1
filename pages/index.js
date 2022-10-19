import Buttons from "../src/components/button";
import { MainNavBar } from "../src/components/mainNavBar";

export default function Home() {

  return (

    <div>

      <title>Hackhaton</title>

      <div className="">

        <MainNavBar />

        <input type="text" placeholder="Search..." />

      </div>

      <div>

        <Buttons />

      </div>

    </div>

  )
}