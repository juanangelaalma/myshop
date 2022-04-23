import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Catalog, Footer, Header } from '../../containers'
import { setMenuActive } from '../../redux/actions/navbar'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // set menu active
    dispatch(setMenuActive("home"))
  }, [])

  return (
    <div className='home'>
      <Header />
      <Catalog buttonMore all={false} />
      <Footer />
    </div>
  )
}

export default Home