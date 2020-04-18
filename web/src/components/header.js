import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'
import logo from '../images/logo-rahmat.png'
import webring from '../images/iconmonstr-github-1.svg'
import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
          <img src={logo} alt={siteTitle} />
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/projects/'>Portfolio</Link>
          </li>
          <li>
            <Link to='/blog/'>Blog</Link>
          </li>
          <li>
            <a href='https://github.com/jimmyromanticdevil/'>
              <img src={webring} alt='Follow Github' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
