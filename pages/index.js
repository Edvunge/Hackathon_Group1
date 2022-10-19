<<<<<<< HEAD
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
=======
import Buttons from "../src/components/button";
import { MainNavBar } from "../src/components/mainNavBar";
>>>>>>> 684e03cfbd824cbd9f89c642b7559c2bce2e2f60

export default function Home() {

  return (
<<<<<<< HEAD
    <div className={styles.container}>
      < About />
=======

    <div>

      <title>Hackhaton</title>

      <div>

        <MainNavBar />

        <h1>Welcome to our Page</h1>

      </div>

      <div>

        <Buttons />

      </div>

>>>>>>> 684e03cfbd824cbd9f89c642b7559c2bce2e2f60
    </div>

  )
}