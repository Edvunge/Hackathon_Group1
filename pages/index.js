import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import { MainNavBar } from '../src/components/mainNavBar'

export default function Home() {

  return (

    <div>

      <MainNavBar />

      <div className={styles.container}>
        < About />
      </div>

      <div>
        <input type="text" placeholder="Search..." />
      </div>

    </div>

  )
}   