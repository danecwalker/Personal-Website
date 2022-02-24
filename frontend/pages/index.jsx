import Head from 'next/head'
import Image from 'next/image'
import Project from '../components/project'
import styles from '../styles/Home.module.css'

export default function Home() {

  const test = {name: "Dane Walker"}

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
            <Project item={test} />
            <Project item={test} />
            <Project item={test} />
          </div>
        </div>
      </main>

    </div>
  )
}
