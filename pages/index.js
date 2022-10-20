import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import About from './about'
import { MainNavBar } from '../src/components/mainNavBar'
import Settings from './settings'
import { useRouter } from 'next/router'
import Link from 'next/link'

/* Icons */

import { AiOutlineSearch } from "react-icons/ai"


export default function Home() {

  const router = useRouter();


  return (

    <div className={styles.background}>

      <MainNavBar />

      <div className={styles.divButtons}>

        <div>
          {/* <AiOutlineSearch /> */}
          <input className={styles.searchBar} type="text" placeholder="🔎 Search..." ></input>

        </div>

        <div className={styles.divStartAndSettings}>

          <div>
            <button className={styles.actionButtons}>Start</button >
          </div>

          <div>
            <button
              className={styles.actionButtons}
              onClick={() => router.push("/settings")}>Settings</button>
          </div>

        </div>

      </div>



    </div >

  )
}   