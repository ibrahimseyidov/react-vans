import React, { Component } from 'react'
import styles from "pages/Home/index.module.css"
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet"

class Home extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <main className={styles["main-bg"]}>

                    <div className={styles["home-container"]}>

                        <div className={styles["home-head"]}>
                            <h2>
                                You got the travel plans, we got the travel vans.
                            </h2>
                        </div>

                        <div className={styles["home-desc"]}>
                            <p>
                                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                            </p>
                        </div>

                        <div className={styles["find-btn"]}>
                            <Link to="vans">
                                Find your van
                            </Link>
                        </div>

                    </div>

                </main>
            </>
        )
    }
}


export default Home