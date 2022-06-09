import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeAddress} from "../redux/user";

export default function Home() {
    const {address} = useSelector((state) => state.user)
    console.log(address)
    return (
        <div>
            <Head>
                <title>PaMarket Farms</title>
                <meta name="description" content="Pa Market is a hub for "/>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"
                      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                      crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300&display=swap"
                    rel="stylesheet"/>
            </Head>
            <header className={styles.indexHeader}>
                <NavBar address={address}/>
            </header>
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
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
