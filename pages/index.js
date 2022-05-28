import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changeAddress } from "./redux/user";
export default function Home() {
  const {address}= useSelector((state)=>state.user)
  console.log(address)
  return (
    <div className={styles.container}>
      <Head>
        <title>PaMarket Farms</title>
        <meta name="description" content="Pa Market is a hub for " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar address={address} />
      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
