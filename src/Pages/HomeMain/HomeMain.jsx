import React from 'react'
import { Footer, Navbar } from '../../components'
import { Categorylist, Header, Howto } from '../../container'

function Home__main() {
  return (
    <div>
      <Navbar />
      <Header />
      <Categorylist />
      <Howto />
      <Footer />
    </div>
  )
}

export default Home__main