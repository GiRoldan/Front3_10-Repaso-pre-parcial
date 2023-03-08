import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {
  const className = `${styles.header} ${styles.h1}`
  //tb lo pdo llamar asi sin const: className={styles.header}
  return (
    <header className={className}>
      {props.title}
    </header>
  )
}

export default Header
