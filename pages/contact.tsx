import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Header} from '../components/Header/Header'

const About: NextPage = () => {
    return (
    <>
        <Head>
            <title>About</title>
            <link rel="icon" href="/shugo.jpg"/>
        </Head>
        <Header />
        <div className="py-32 px-4 flex flex-col justify-center items-center mx-auto max-w-2xl">
            <Image src="/shugo.jpg" alt="Shugo pfp" b-10 width={200} height={200} />
            <p className="text-5xl pt-5">Hi, Im Shugo</p>
        </div>     
    </>
    )
}
export default About