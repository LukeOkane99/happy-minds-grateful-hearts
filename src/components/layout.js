import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './navbar';
import Hero from './hero';
import './layout.css'

const Layout = ({pageTitle, children}) => {
  return (
    <div>
      <main>
        <NavigationBar/>
        <Hero/>
      </main>
    </div>
  )
}

export default Layout