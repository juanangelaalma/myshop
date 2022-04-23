import React from 'react'
import { Catalog, Footer, Header } from '../../containers'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Catalog buttonMore all={false} />
      <Footer />
    </div>
  )
}

export default Home