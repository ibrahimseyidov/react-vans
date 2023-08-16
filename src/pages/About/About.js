import React, { Component } from 'react'
import aboutImg from "assets/images/about.svg"
import styles from "pages/About/index.module.css"
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"

export default class About extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>About</title>
                </Helmet>
                <main className={styles["about-bg"]}>

                    <div className={styles["about-img"]}>
                        <img src={aboutImg} alt="aboutImg" />
                    </div>

                    <div className={styles["about-container"]}>

                        <div className={styles["about-head"]}>
                            <h3>
                                Don’t squeeze in a sedan when you could relax in a van.
                            </h3>
                        </div>

                        <div className={styles["about-desc"]}>
                            <p>
                                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
                                <br /> <br /> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                            </p>
                        </div>

                    </div>

                    <div className={styles["about-card"]}>
                        <div className={styles["card-title"]}>
                            <h3>
                                Your destination is waiting. <br /> Your van is ready.
                            </h3>
                        </div>
                        <div className={styles["about-btn"]}>
                            <Link to="/vans">
                                Explore our vans
                            </Link>
                        </div>
                    </div>

                </main >
            </>
        )
    }
}
