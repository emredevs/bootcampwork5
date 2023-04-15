import React from 'react'
import styles from './styles.module.css'
//button components tanımlanığımız ve styles verdiğimiz sayfa
export const Primary = (props) => {
  return (
    <button className={styles.Primary} {...props}>
      {props.text}
    </button>
  )
}
export const Success = (props) => {
  return (
    <button className={styles.Success} {...props}>
      {props.text}
    </button>
  )
}
export const Danger = (props) => {
  return (
    <button className={styles.Danger} {...props}>
      {props.text}
    </button>
  )
}
export const Warning = (props) => {
  return (
    <button className={styles.Warning} {...props}>
      {props.text}
    </button>
  )
}

export const Primary1 = (props) => {
  return (
    <button className={styles.Primary1} {...props}>
      {props.text}
    </button>
  )
}

export const Success1 = (props) => {
  return (
    <button className={styles.Success1} {...props}>
      {props.text}
    </button>
  )
}

export const Danger1 = (props) => {
  return (
    <button className={styles.Danger1} {...props}>
      {props.text}
    </button>
  )
}

export const Warning1 = (props) => {
  return (
    <button className={styles.Warning1} {...props}>
      {props.text}
    </button>
  )
}
