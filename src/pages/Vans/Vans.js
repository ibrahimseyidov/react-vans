import React, { Component } from 'react'
import styles from "pages/Vans/index.module.css"
import Helmet from "react-helmet";
import "service/server"
import { getVans } from 'service/vanServices';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { toHaveStyle } from '@testing-library/jest-dom/matchers';

export default class Vans extends Component {

    constructor() {
        super()

        this.state = {
            vansData: [],
            isLoading: true,
            filteredData: false
        }
    }

    componentDidMount() {
        const reFetch = async () => {
            const res = await getVans()
            const { vans } = res.data

            this.setState({ vansData: vans })
            this.setState({ isLoading: false })
        }

        reFetch()
    }

    createVanCard = () => {
        const { vansData, isLoading } = this.state
        return isLoading ? <h1>Loading...</h1> :
            vansData.map((van => (
                <motion.div
                    key={van.id}
                    className={styles["card-container"]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link to={`/vandetail/${van.id}`} className={styles["card-link"]}>

                        <div className={styles["img-container"]}>
                            <img src={van.imageUrl} alt="example" />
                        </div>
                        <div className={styles["card-desc"]}>
                            <div className={styles["card-title"]}>
                                <h3>{van.name}</h3>
                                <span className={van.type === "simple" ? styles["van-simple"] : van.type === "luxury" ? styles["van-luxury"] : van.type === "rugged" ? styles["van-rugged"] : null} >{van.type}</span>
                            </div>
                            <div className={styles["card-price"]}>
                                <span>{van.price}</span>
                                <br />
                                <span>/day</span>
                            </div>
                        </div>

                    </Link >
                </motion.div>
            )))
    }


    filterType = (e) => {
        const { vansData, isLoading } = this.state
        const currentType = e.target.textContent.toLowerCase()
        console.log(currentType);
        let filteredData = vansData.filter(van => van.type === currentType)
        this.setState({ filteredData: true })
        return filteredData?.map(van => (
            <motion.div
                key={van.id}
                className={styles["card-container"]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Link to={`/vandetail/${van.id}`} className={styles["card-link"]}>

                    <div className={styles["img-container"]}>
                        <img src={van.imageUrl} alt="example" />
                    </div>
                    <div className={styles["card-desc"]}>
                        <div className={styles["card-title"]}>
                            <h3>{van.name}</h3>
                            <span className={van.type === "simple" ? styles["van-simple"] : van.type === "luxury" ? styles["van-luxury"] : van.type === "rugged" ? styles["van-rugged"] : null} >{van.type}</span>
                        </div>
                        <div className={styles["card-price"]}>
                            <span>{van.price}</span>
                            <br />
                            <span>/day</span>
                        </div>
                    </div>

                </Link >
            </motion.div>
        ))

    }

    render() {
        const { filteredData, vansData, isLoading } = this.state;

        return (
            <>

                <Helmet>
                    <title>Vans</title>
                </Helmet>
                <main className={styles["main-bg"]}>
                    <div className={styles['van-container']}>
                        <div className={styles["vans-head"]}>

                            <div className={styles["vans-title"]}>
                                <h2>
                                    Explore our van options
                                </h2>
                            </div>

                            <div>
                                <nav>
                                    <ul className={styles["nav-container"]}>
                                        <li>
                                            <button onClick={(e) => this.filterType(e)} className={styles["filter-name"]}>Simple</button>
                                        </li>
                                        <li>
                                            <button className={styles["filter-name"]}>Luxury</button>
                                        </li>
                                        <li>
                                            <button className={styles["filter-name"]}>Rugged</button>
                                        </li>
                                        <li>
                                            <button className={styles["clear-filter"]}>Clear filters</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={styles["cards"]}>
                                {!vansData ? <div>loading...</div> : filteredData ? this.filterType() : vansData ? this.createVanCard() : null}
                            </div>

                        </div>
                    </div>

                </main>

            </>
        )
    }
}
