import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import {useRouter} from 'next/router'
import {useUser} from "@auth0/nextjs-auth0";
import {useEffect} from "react";
import axios from "axios";
import {addUser, saveName} from "../redux/user"

export default function Home() {
    const {address} = useSelector((state) => state.user)
    const {user, error, isLoading} = useUser();
    const dispatch = useDispatch()
    const router = useRouter()
    const getUser = (email) => {
        let result
        fetch("https://hammerhead-app-an67q.ondigitalocean.app/api/users", {
            method: "POST",
            mode: 'no-cors',
            body: email
        }).then(async function (response) {
            result = await response
            console.log(result)
        })

    }
    useEffect(

        a => {

            console.log("mounted")
            let result
            const getUser = async (email) => {
                const res = await axios.post('api/user', email, {
                    headers: {
                        // Overwrite Axios's automatically set Content-Type
                        'Content-Type': 'application/json'
                    }
                })
                const userData = res.data
                console.log(userData)
               // dispatch(addUser(userData))

                return userData

            }
            if (user) {
                //  router.push('/farms').then(r => console.log(r));
                const email = JSON.stringify({email: user.email})
                dispatch(saveName(user.name))
                console.log(email);
                getUser(email).then(r => {
                    result = r
                    if (r.message === "success") {
                        console.log(r.address[0].houseNum)
                        const houseNum = r.address[0].houseNum
                        if(houseNum==="") {
                            console.log("move to next page")
                            dispatch(addUser(r))
                            console.log(r.address[0].houseNum === "")
                            router.push('/signup');
                        }
                        else {
                            router.push('/farms');
                        }

                    }
                    else if(r.message==="could not find user in database"){
                        router.push('/signup');
                    }
                })

            }


        },[user]
    )
    const sectionStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`,
        width: "100%",
        backgroundRepeat: "no-repeat"

    };
    return (
        <>
            <Head>
                <title>Pa Market Delivery</title>
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
            <header className={styles.landingImage}>

                <NavBar showMid={false} address={address}/>
                <Container className={" justify-content-center align-items-center text-center"}>
                    <Row className={" justify-content-center align-items-center"}>
                        <Col className={"d-flex flex-column justify-content-center align-items-center"}>
                            <p className={"fs-1"}>Your Favourites</p>
                            <input placeholder={"Put in location"}/>

                        </Col>
                    </Row>
                </Container>
            </header>

            <main>
                <Container style={{marginTop: "1rem"}} className={"justify-content-center "}>
                    <Row sm={2} className={"align-items-center"}>
                        <Col lg={5}>
                            <Image
                                src={"https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg"}
                                height={400} width={500} objectFit={"cover"}
                                alt={""}
                            />
                        </Col>
                        <Col lg={6}>
                            <div className={"d-flex flex-column justify-content-between"}>
                                <h1>What is Pa Market?</h1>
                                <p style={{textAlign: "justify", textJustify: "inter-word"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in metus quis nunc
                                    accumsan
                                    feugiat. Fusce quis tellus ultricies, suscipit urna vitae, imperdiet odio.
                                    Pellentesque
                                    ultrices
                                    maximus purus a viverra. Duis lobortis et quam ac porta. Duis facilisis convallis
                                    lobortis.
                                    In
                                    rhoncus gravida leo. Morbi at enim sapien. Donec cursus urna mauris, ut ullamcorper
                                    ipsum
                                    vehicula eu. Integer consequat magna ac rutrum laoreet. Nam tortor lacus, maximus at
                                    est
                                    aliquam, ultricies laoreet turpis. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Morbi luctus tincidunt tristique. Sed id enim lectus. Curabitur nec fermentum felis.
                                    Duis
                                    cursus
                                    vulputate orci ut porta.
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <Container style={{marginTop: "5rem"}}>
                    <Row className={"justify-content-between"} md={3} lg={1}>
                        <Col md={1} lg={3}>
                            <div className={"d-flex flex-column justify-content-center align-items-center text-center"}>
                                <Image
                                    src={"https://images.unsplash.com/photo-1593035013811-2db9b3c36980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"}
                                    height={200}
                                    width={300}
                                    objectFit={"cover"}
                                    alt={""}
                                />
                                <h3>Become a Driver</h3>
                                <p style={{textAlign: "center", textJustify: "inter-word"}}>As a driver youll Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <Link href={"/"}>Join</Link>
                            </div>
                        </Col>
                        <Col md={1} lg={3}>
                            <div className={"d-flex flex-column justify-content-center align-items-center text-center"}>
                                <Image
                                    src={"https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"}
                                    height={200}
                                    width={300}
                                    objectFit={"cover"}
                                />
                                <h3>Become a Farm Partner</h3>
                                <p style={{textAlign: "center", textJustify: "inter-word"}}>As a driver youll Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <Link href={"/"}>Join</Link>
                            </div>
                        </Col>
                        <Col md={1} lg={3}>
                            <div className={"d-flex flex-column justify-content-center align-items-center text-center"}>
                                <Image
                                    src={"https://firebasestorage.googleapis.com/v0/b/pamarket-63297.appspot.com/o/Web%201920%20%E2%80%93%201.png?alt=media&token=70a800bf-e659-4e80-a346-d9354d3207c4"}
                                    height={200}
                                    width={300}
                                    objectFit={"contain"}
                                />
                                <h3>Get the app</h3>
                                <p style={{textAlign: "center", textJustify: "inter-word"}}>As a driver youll Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <Link href={"/"}>Download</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container style={{marginTop: "5rem"}}>
                    <Row xs={1} lg={2} className={"justify-content-center align-items-center"}>
                        <Col xs={{order: 2}} lg={{order: 1}}>
                            <div className={"d-flex flex-column justify-content-between"}>
                                <h1>Careers</h1>
                                <p style={{textAlign: "justify", textJustify: "inter-word"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in metus quis nunc
                                    accumsan feugiat. Fusce quis tellus ultricies, suscipit urna vitae, imperdiet odio.
                                </p>
                                <ul style={{listStyle: "none"}}>
                                    <li>
                                        <Link href={"/"}>Business Analysts</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"}>Software Engineers</Link>
                                    </li>

                                    <li>
                                        <Link href={"/"}>Web Developers</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"}>Mobile App Developers</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"}>IT professionals</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"}>Human Resource Managers</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"}>Lawyers</Link>
                                    </li>
                                </ul>

                            </div>

                        </Col>
                        <Col xs={{order: 1}} lg={{order: 2}}>
                            <Image
                                src={"https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"}
                                height={600} width={400} objectFit={"cover"}
                                alt={""}
                            />
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </>
    )
}
