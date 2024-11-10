import React from 'react'

function Hero() {
    const banner = new URL('../assets/Banner.png', import.meta.url).href;

  return (
     <div className='container-lg'>
        <img src={banner} alt='hero-banner'></img>
     </div>
  )
}

export default Hero