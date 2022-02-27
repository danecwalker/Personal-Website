import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import styles from '../../styles/ProjectPage.module.css'
import Image from 'next/image'
import { Triangle } from 'react-loader-spinner'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

function ProjectPage() {

  const [code, setCode] = useState({})

  const router = useRouter()
  const {pid} = router.query
  const [project, setProject] = useState({})
  const [loading, setLoading] = useState(true)
  const [loadedImage, setLoadedImage] = useState("false")

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

    async function fetchDataCode() {
      try {
        const res = await fetch(`http://localhost:4000/api/v1/repos/latest/${pid}/code`)
        const json = await res.json()
        if (res.status === 200) {
          setCode(json)
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
    fetchDataCode()
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
        
        {loadedImage === "false" ? <div id={styles.loader}>
          <Triangle 
            height="100"
            width="100"
            color='black'
            ariaLabel='loading'
            />
        </div> : null }

        {loadedImage === "error" ? null : <div id={[styles.shot]}>
          {project.raw_image ? <Image onLoadingComplete={()=>{console.log("loaded");setLoadedImage("true")}} onError={()=>{console.log('error');setLoadedImage("error")}} loader={() => project?.raw_image} src={project?.raw_image} alt="" layout="fill" objectFit="contain" objectPosition="top" unoptimized/> : null}
        </div> }


        {code?.code ? 
        <div id={styles.codeEditor}>
          <SyntaxHighlighter language={code?.lang} style={ atomOneDark } id={styles.syntaxHighlighter} wrapLongLines showLineNumbers>
            {code?.code}
          </SyntaxHighlighter>
        </div>
        : null}
      </main>

    </div>
  )
}

export default ProjectPage