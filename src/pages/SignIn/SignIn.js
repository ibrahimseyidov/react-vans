import React, { Component } from 'react'
import styles from "pages/SignIn/index.module.css"
import Helmet from "react-helmet"

export default class SignIn extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Sign In</title>
                </Helmet>

                <main className={styles["signIn-bg"]}>

                    <div className={styles["signIn-title"]}>
                        <h3>
                            Sign in to your account
                        </h3>
                    </div>

                    <div className={styles["signIn-inputs"]}>
                        <input type="email" placeholder='Email address' />
                        <input type="password" placeholder='Password' />
                    </div>

                    <div className={styles["signIn-btn"]}>
                        <button>
                            Sign in
                        </button>
                    </div>

                    <div className={styles["create-account"]}>
                        <span>Don't have an account?</span>
                        <a>Create one now</a>
                    </div>

                </main>
            </>
        )
    }
}
