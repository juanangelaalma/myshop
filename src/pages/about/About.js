import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from '../../components'
import { Footer } from '../../containers'
import { setMenuActive } from '../../redux/actions/navbar'

import "./about.css"

const About = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0,0)
    // set menu active
    dispatch(setMenuActive("about"))
  }, [])
  
  return (
    <div className='about'>
      <Navbar />
      <div className='about__content'>
        <h1>PT DEWA NUSANTARA GLOBAL</h1>
        <p>PT DEWA NUSANTARA GLOBAL adalah perusahaan yang berdedikasi untuk memberikan solusi berbagai macam produk berkualitas tinggi kepada pelanggan kami. Dengan pengalaman bertahun-tahun dalam industri ini, kami telah membangun reputasi sebagai salah satu penyedia produk terpercaya di pasar.
          Visi Kami:
          Visi kami adalah menjadi mitra terpercaya bagi pelanggan kami dalam memenuhi berbagai kebutuhan produk mereka. Kami bertujuan untuk memberikan produk berkualitas tinggi dengan harga yang bersaing serta layanan pelanggan yang unggul.</p>
      </div>
      <Footer />
    </div>
  )
}

export default About