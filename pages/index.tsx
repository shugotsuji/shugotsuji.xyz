import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className= "bg-white text-gray-800" >  
      <Head>
        <title>Shugo Tsuji</title>
        <link rel="icon" href="/shugo.jpg"/>
        
      </Head>
      <header>
        <div className="py-10 text-gray-900 text-xl flex items-center text-center content-center justify-center rounded">
          <div className="item w-32 h-10">About</div>
          <div className="item w-32 h-10">Blog</div>
	        <div className="item w-32 h-10">Contact</div>
        </div>
      </header>
      
      <main className="pt-24 pb-40 px-4 flex flex-col justify-center items-center mx-auto max-w-2xl">
        <Image src="/shugo.jpg" alt="Nysm Logo" b-10 width={200} height={200} />
        <a href="https://twitter.com/nysm_xyz">
          <p className= "text-5xl pt-5">Hi, Im Shugo</p>
        </a>
        <a href="mailto:shugo@nysm.xyz">
          <p className= "text-2xl pt-10 underline underline-offset-0">
            shugo@nysm.xyz
          </p>
        </a>
      </main>
      
      <footer className="flex justify-center items-center border-t">
        <a href="https://www.nysm.xyz/">©2022 Shugo Tsuji. All rights reserved.</a>
      </footer>
    </div>
  )
}

export default Home