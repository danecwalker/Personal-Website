import styles from '../styles/Project.module.css'

function Project({item}) {
  return (
    <div id={styles.project}>{item?.name}</div>
  )
}

export default Project