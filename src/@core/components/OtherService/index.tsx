'use client'
import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Card } from 'antd'
import { motion } from 'framer-motion'

export const OtherService: FC = () => {
  const { t } = useLang()

  return (
    <section className='other-section d-flex flex-column justify-around gap-y-4'>
      <div className='other-title d-flex justify-center '>
        <h1>{t('other-service')}</h1>
      </div>
      <div className='d-flex align-center justify-center gap-5 flex-wrap'>
        <motion.div
          initial={{ y: -100 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.1 }}
        >
          <Card hoverable className='other-card'>
            <h1>
              Axborot va ma’lumot <br /> xizmati
            </h1>
            <div className='other-img d-flex align-end justify-end'>
              <motion.img whileHover={{ scale: 1.1 }} src='/assets/otherService/chip.svg' alt='chip' />
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
        >
          <Card hoverable className='other-card'>
            <h1>
              Tabriklash <br /> xizmati
            </h1>
            <div id='present' className='other-img d-flex align-end justify-end'>
              <motion.img whileHover={{ scale: 1.1 }} src='/assets/otherService/present.svg' alt='present' />
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', duration: 4, bounce: 0.1 }}
        >
          <Card hoverable className='other-card'>
            <h1>
              1064 <br /> xizmati
            </h1>
            <div className='other-img d-flex align-end justify-end'>
              <motion.img whileHover={{ scale: 1.1 }} src='/assets/otherService/earphones.svg' alt='earphones' />
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', duration: 5, bounce: 0.1 }}
        >
          <Card hoverable className='other-card'>
            <h1>
              1086 <br /> xizmati
            </h1>
            <div className='other-img d-flex align-end justify-end'>
              <motion.img whileHover={{ scale: 1.1 }} src='/assets/otherService/earphones.svg' alt='earphones' />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
