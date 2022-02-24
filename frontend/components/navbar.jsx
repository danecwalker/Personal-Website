import styles from '../styles/NavBar.module.css'
import {GithubFill, LinkedinBoxFill} from 'akar-icons'

function NavBar() {
  return (
    <nav id={styles.navBar}>
      <ul id={styles.links}>
        <ul id={styles.sublinks}>
          <li id={styles.int_link}><a href="/projects">Projects</a></li>
          <li id={styles.int_link}><a href="/contact">Contact</a></li>
        </ul>
        <li id={styles.name}><a href="/">Dane Walker</a></li>
        <ul id={styles.sublinks}>
          <li id={styles.ext_link}><a href="https://github.com/danecwalker" target="_blank" rel="noopener noreferrer"><GithubFill id={styles.test}/></a></li>
          <li id={styles.ext_link}><a href="https://www.linkedin.com/in/danecwalker/" target="_blank" rel="noopener noreferrer"><LinkedinBoxFill /></a></li>
        </ul>
      </ul>
    </nav>
  )
}

export default NavBar;