import Head from 'next/head'
import Layout from '../comps/Layout.js'
import Main from '../comps/Main.js'
import React, {useState} from 'react'

export default function Home() {
    const [binoPos,setBinoPos] = useState({x:"50%", y:"50%"})
    const [binoSize, setBinoSize] = useState(10)
    const [clarity, setClarity] = useState(30)
  return (
    <div>
      <Head>
        <title>Blur Game</title>
        <meta name="description" content="It's a game of blury images" />
      </Head>

    <Layout binoPos={binoPos} binoSize={binoSize} clarity={clarity} setBinoPos={setBinoPos} setBinoSize={setBinoSize}  setClarity={setClarity} >
        <Main binoPos={binoPos} binoSize={binoSize} clarity={clarity} setBinoPos={setBinoPos} setBinoSize={setBinoSize}  setClarity={setClarity} />
    </Layout>
    </div>
  )
}
