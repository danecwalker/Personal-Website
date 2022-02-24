import styles from '../styles/Navbar.module.css'

import Link from 'next/link'

function Navbar() {
  return (
    <nav id={styles.nav}>
      <div id={styles.nav_links}>
        <div id={styles.nav_group_a}>
          <div id={styles.nav_link}><Link href="#">Projects</Link></div>
          <div id={styles.nav_link}><Link href="#">Contact</Link></div>
        </div>
        <div id={styles.nav_group_b}>
          <div id={styles.nav_link}><Link href="#">Dane Walker</Link></div>
        </div>
        <div id={styles.nav_group_c}>
          <div id={styles.nav_link}><Link href="#">Github</Link></div>
          <div id={styles.nav_link}><Link href="#">Linkedin</Link></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar