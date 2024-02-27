import React from 'react'
import './App.css'
import { Body } from './components/Body/Body'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export default function App() {

  return (
    <>
    <section className="container-app">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </section>
    </>
    
  )
}