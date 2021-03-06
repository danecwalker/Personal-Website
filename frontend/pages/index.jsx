import Head from 'next/head'
import { useState, useEffect } from 'react'
import Project from '../components/project'
import styles from '../styles/Home.module.css'

function Home() {

  const [latest, setLatest] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:4000/api/v1/repos/latest?limit=4")
        const json = await res.json()
        if (res.status === 200) {
          setLatest(json)
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (loading) {
      fetchData()
    }

  }, [loading, latest])
  

  return (
    <div id={styles.container}>
      <Head>
        <title>Dane Walker</title>
        <meta name="description" content="Dane Walker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={styles.main}>
        <div id={styles.header}>
          <h1>Dane Walker</h1>
          <h3>Mechatronics Engineering / Computer Science Student</h3>
          <h3>Based in 📍 Brisbane, Australia</h3>
        </div>

        <div id={styles.latest}>
          <h3>Latest</h3>

          <div id={styles.latest_projects}>
            {latest?.map((project, idx) => (
              <Project key={idx} item={project} />
            ))}
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home