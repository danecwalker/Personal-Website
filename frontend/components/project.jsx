import Link from 'next/link'
import styles from '../styles/Project.module.css'

function Project({item}) {
  return (
    <Link href={`/projects/${item?.name}`}>
      <a>
        <div id={styles.project}>
          <h4>{item?.name}</h4>
          <p>{item?.description}</p>
          <div id="vspace"></div>
          {item?.language ? <p id={styles.project_language} style={{color: item?.lang_color, backgroundColor: `${item?.lang_color}33`, borderColor: item?.lang_color}}>{item?.language}</p> : null}
        </div>
      </a>
    </Link>
  )
}

export default Project