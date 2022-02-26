import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Triangle } from 'react-loader-spinner'
import Project from '../components/project'
import styles from '../styles/Projects.module.css'

function Projects() {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:4000/api/v1/repos/latest")
        const json = await res.json()
        if (res.status === 200) {
          setProjects(json)
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (loading) {
      fetchData()
    }
  })

  return (
    <div id={styles.container}>
      <Head>
        <title>Dane Walker</title>
        <meta name="description" content="Dane Walker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={styles.main}>
        <div id={styles.header}>
          <h1>Projects 🚀</h1>
        </div>

        <div id={styles.latest}>
          { loading ?
            <div>
              <Triangle 
                height="100"
                width="100"
                color='black'
                ariaLabel='loading'
                />
            </div>
            :
            <div id={styles.latest_projects}>
              {projects?.map((project, idx) => (
                <Project key={idx} item={project} />
              ))}
            </div>
          }
        </div>
      </main>

    </div>
  )
}

export default Projects