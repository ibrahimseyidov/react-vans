import React, { Component } from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }
}
