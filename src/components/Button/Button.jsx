/* eslint-disable react/prop-types */
import styles from './Button.module.css'

const Button = (props) => {
  const { isOutline, name, icon } = props
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {name}
    </button>
  )
}

export default Button
