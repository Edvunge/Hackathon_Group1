import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import { MainNavBar } from '../src/components/mainNavBar'
import Settings from './settings'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() {

  // const navigate = useNavigate();


  return (

    <div>

      <MainNavBar />

      <div className={styles.container}>

      </div>

      <div>
        <input type="text" placeholder="Search..." />
      </div>

      <div>
        <button>Start</button >
      </div>

      <div>
        <a href='/settings'><button>Settings</button></a>
      </div>

    </div>

  )
}   