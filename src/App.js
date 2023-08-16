import React, { Component } from 'react'
import "styles/reset.css"
import "styles/global.css"
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Vans from 'pages/Vans/Vans';
import VanDetail from 'pages/Vans/VanDetail/VanDetail';
import SignIn from 'pages/SignIn/SignIn';
import ErrorPage from 'shared/components/ErrorPage/ErrorPage';
import { Route, Routes } from 'react-router';
import Layout from 'shared/components/Layout/Layout';


export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vandetail/:id" element={<VanDetail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/*" element={<ErrorPage />} />
          </Route>

        </Routes>
      </>
    )
  }
}
