import React from 'react'
import NavigationBar from './navbar';
import Hero from './hero';
import Classes from './classes';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'

const Layout = ({pageTitle, children}) => {
  return (
    <div>
      <main>
        <NavigationBar/>
        <Hero/>
        <Classes/>
        <Footer/>
      </main>
    </div>
  )
}

export default Layout