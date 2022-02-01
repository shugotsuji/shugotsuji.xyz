import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Header} from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <div className= "bg-white text-gray-800" >  
      <Head>
        <title>shugo</title>
        <link rel="icon" href="/shugo.jpg"/>
      </Head>
      <Header/>
      <main className="py-32 px-4 flex flex-col justify-center items-center mx-auto max-w-2xl">
        <Image src="/shugo.jpg" alt="Shugo pfp" b-10 width={200} height={200}/>
        <a href="https://twitter.com/0xshugo">
          <p className= "text-5xl pt-5 hover:text-gray-500">Hi, Im Shugo</p>
        </a>
        <a href="mailto:shugo@nysm.xyz">
          <p className= "text-2xl pt-10 hover:text-gray-500">
            shugo@nysm.xyz
          </p>
        </a>
      </main>
      
      <footer className="flex justify-center items-center border-t">
        <a>©2022 shugo</a>
      </footer>
    </div>
  )
}

export default Home