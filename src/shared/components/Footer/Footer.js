import React, { Component } from 'react'
import styles from "shared/components/Footer/index.module.css"

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className={styles["footer-bg"]}>
          <div className={styles["footer-container"]}>
            <span>
              Ⓒ 2023 #VANLIFE
            </span>
          </div>
        </footer>
      </>
    )
  }
}
