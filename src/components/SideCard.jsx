import React from 'react'

import styles from './SideCard.module.scss'
function SideCard({data:{image,title}}) {
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default SideCard