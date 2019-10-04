import React from 'react'
import styles from './drawer-toggle.styles.css'
const drawerToggle = (props) => {
    return (
        <div className={styles.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default drawerToggle
