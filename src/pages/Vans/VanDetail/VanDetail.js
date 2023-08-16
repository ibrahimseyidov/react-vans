import React, { useEffect, useState } from 'react'
import leftArrow from "assets/images/leftArrow.svg";
import styles from "pages/Vans/VanDetail/index.module.css"
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VanDetail = () => {

    const { id } = useParams()
    const [van, setVan] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`/api/vans/${id}`)
            .then(res => setVan(res.data.vans))
        setLoading(false)
    }, [id])

    const createDetailCard = () => {

        return van ? <motion.div
            className={styles["detail-card"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles["detail-img"]}>
                <img src={van.imageUrl} alt="vanImage" />
            </div>

            <div className={styles["van-desc"]}>
                <div className={styles["van-type-container"]}>
                    <span className={van.type === "simple" ? styles["van-simple"] : van.type === "luxury" ? styles["van-luxury"] : van.type === "rugged" ? styles["van-rugged"] : null} >{van.type}</span>
                </div>
                <h2>{van.name}</h2>
                <span>${van.price}<span>/day</span></span>
                <p>
                    {van.description}
                </p>
                <button>
                    Rent this van
                </button>
            </div>
        </motion.div> : <h1>Loading...</h1>

    }

    return (

        <>
            <main className={styles["vanDetail-bg"]}>

                <div className={styles["vanDetail-container"]}>

                <div className={styles["back-btn"]}>
                    <img src={leftArrow} alt="leftArrow" />
                    <Link to="/vans">Back to all vans</Link>
                </div>

                {isLoading ? <h1>Loading...</h1> : createDetailCard()}

                </div>
             
            </main>
        </>
    )

}


export default VanDetail