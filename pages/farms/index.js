import Head from 'next/head'
import NavBar from '../../components/Navbar';
export default function Farms() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Farm" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div>
                farm stuff
            </div>
        </div>
    );
}