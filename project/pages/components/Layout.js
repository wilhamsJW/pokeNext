import NavBar from "./NavBar"
import Footer from "./Footer"

import Head from 'next/head'

export default function Layout({children}) {
    return (
        <> 
            <Head>
                <link rel="shortcut icon" href="" ></link>
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}