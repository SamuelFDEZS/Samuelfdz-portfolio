import { useState } from 'react'
import './App.scss'
import './styles/main.scss'
import { Header } from './sections/header/Header'
import { Hero } from './sections/hero/Hero'
import { Experience } from './sections/experience/Experience'
function App() {

    return (
        <>
            <Header />
            <Hero />
            <Experience />
        </>
    )
}

export default App
