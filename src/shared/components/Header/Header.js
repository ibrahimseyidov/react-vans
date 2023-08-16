import React, { Component } from 'react'
import styles from "shared/components/Header/index.module.css"
import user from "assets/images/user.svg"
import { Link, NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <>
                <header className={styles["header-bg"]}>
                    <div className={styles["header-container"]}>
                        <div>
                            <Link to="/" className={styles["header-logo"]}>#VANLIFE</Link>
                        </div>
                        <div>
                            <nav>
                                <ul className={styles["header-nav"]}>
                                    <li>
                                        <NavLink to="/about" className={styles["nav-link"]}>About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/vans" className={styles["nav-link"]}>Vans</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signin" className={styles["nav-link"]}><img src={user} /></NavLink>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                    </div>

                </header>
            </>
        )
    }
}


export default Header