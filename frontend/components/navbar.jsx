import styles from '../styles/Navbar.module.css'

import Link from 'next/link'
import {GithubFill, LinkedinBoxFill} from 'akar-icons'
import {useRef, useEffect, useState} from 'react'

function Navbar() {

  const nav = useRef()

  const [showShadow, setShowShadow] = useState(false)

  const target = useRef();

  const handleScroll = (e) => {
    if (window.scrollY >= target.current) {
      setShowShadow(true)
    } else if (window.scrollY < target.current) {
      setShowShadow(false)
    }

  }

  useEffect(() => {
    target.current = nav.current.clientHeight * 0.5
    window.addEventListener('scroll', handleScroll);
  }, [])
  

  return (
    <nav ref={nav} id={[styles.nav]} className={showShadow ? styles.navShadow : null}>
      <div id={styles.nav_links}>
        <div id={styles.nav_group_a}>
          <div id={styles.nav_link}><Link href="/projects">Projects</Link></div>
          <div id={styles.nav_link}><Link href="#">Contact</Link></div>
        </div>
        <div id={styles.nav_group_b}>
          <div id={styles.nav_link}><Link href="/">Dane Walker</Link></div>
        </div>
        <div id={styles.nav_group_c}>
          <div id={styles.nav_link}><Link href="https://github.com/danecwalker"><a><GithubFill strokeWidth={2} size={20} /></a></Link></div>
          <div id={styles.nav_link}><Link href="https://www.linkedin.com/in/danecwalker/"><a><LinkedinBoxFill strokeWidth={2} size={20} /></a></Link></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar