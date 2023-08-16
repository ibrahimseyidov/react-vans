import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from "shared/components/ErrorPage/index.module.css"
import { Helmet } from 'react-helmet';

export default class ErrorPage extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Oops Error!</title>
                </Helmet>
                <main className={styles["error-bg"]}>
                    <h3>
                        Sorry, the page you were looking for was not found.
                    </h3>
                    <Link to="/">
                        Return to home
                    </Link>
                </main>
            </>

        )
    }
}
