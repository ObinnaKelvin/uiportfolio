import React from 'react'
import styles from "./contact.css"

const Button = ({children, handleClick}) => {
	return (
		<button onClick={handleClick} className={styles.button}>{children}</button>
	)
}

export default Button