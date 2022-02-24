import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer id={styles.footer}>
      <div id={styles.footer_group_a}>
        &copy; Copyright 2022, Dane Walker
      </div>
    </footer>
  )
}

export default Footer