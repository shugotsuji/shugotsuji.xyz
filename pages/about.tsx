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
        <Header/>
            
        <div className="py-24 px-4 flex flex-col justify-center items-center mx-auto max-w-2xl">
            <Image src="/shugo.jpg" alt="Shugo pfp" b-10 width={200} height={200} />
            <p className="text-5xl pt-10">Hi, Im Shugo</p>
            <p className="text-lg pt-5 text-gray-700 md:text-center">
                Founder of{' '}
            <a
              href="https://nysm.xyz/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nysm Inc
            </a>
            , Currently building{' '}
            <a className="underline"
              href="https://twitter.com/phi_xyz"
            >
              Φ
            </a>
          </p>
        </div>
    </>
    )
}
export default About