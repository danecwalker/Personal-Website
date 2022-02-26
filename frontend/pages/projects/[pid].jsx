import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../../styles/ProjectPage.module.css'
import Image from 'next/image'
import { Triangle } from 'react-loader-spinner'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

function ProjectPage() {

  const code = `
  usage: MNet.py [-h] [-t] [-lr LEARNING_RATE] [-e EPOCHS] [-b BATCH] [-m MODEL]

  optional arguments:
    -h, --help            show this help message and exit
    -t, --train           Train model
    -lr LEARNING_RATE, --learning-rate LEARNING_RATE
                          Train learning rate
    -e EPOCHS, --epochs EPOCHS
                          Number of epochs to train
    -b BATCH, --batch BATCH
                          Batch size
    -m MODEL, --model MODEL
                          Model number
  `

  const router = useRouter()
  const {pid} = router.query
  const [project, setProject] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:4000/api/v1/repos/latest/${pid}`)
        const json = await res.json()
        if (res.status === 200) {
          setProject(json)
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [loading, pid])
  

  return (
    <div id={styles.container}>
      <Head>
        <title>Dane Walker</title>
        <meta name="description" content="Dane Walker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={styles.main}>
        <div id={styles.header}>
          <h1>{project?.name}</h1>
          <h3>{project?.description}</h3>
          {project?.language ? <h5 id={styles.project_language} style={{color: project?.lang_color, backgroundColor: `${project?.lang_color}33`, borderColor: project?.lang_color}}>{project?.language}</h5> : null}
        </div>

        <div id={styles.links}>
          <Link href={project?.html_url || "#"}><a target="_blank" rel="noopener noreferrer"><h4>{project?.html_url}</h4></a></Link>
          <Link href={project?.homepage || "#"}><a target="_blank" rel="noopener noreferrer"><h4>{project?.homepage}</h4></a></Link>
        </div>
        {project?.raw_image ? 
        project?.raw_image === "" ? null :
        <div id={styles.shot}>
          <Image loader={() => project?.raw_image} src={project?.raw_image} alt="" layout="fill" objectFit="contain" objectPosition="top"/>
        </div>
        : 
        <div id={styles.loader}>
          <Triangle 
            height="100"
            width="100"
            color='black'
            ariaLabel='loading'
            />
        </div>}

        <div id={styles.codeEditor}>
          <SyntaxHighlighter language="bash" style={ atomOneDark } id={styles.syntaxHighlighter} wrapLongLines showLineNumbers>
            {code}
          </SyntaxHighlighter>
        </div>
      </main>

    </div>
  )
}

export default ProjectPage