import { FC } from 'react'
import './Marquee.css'

const Marquee: FC = () => {
  return (
    <div className='marquee-container d-flex align-center justify-between'>
      <div className='marquee-text'>Sayt test rejimda ishlamoqda!</div>
      <div className='marquee-text'>Sayt test rejimda ishlamoqda!</div>
    </div>
  )
}

export default Marquee
