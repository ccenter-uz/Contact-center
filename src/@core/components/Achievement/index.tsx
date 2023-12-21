'use client'
import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { motion } from 'framer-motion'

export const Achievements: FC = () => {
  const { t } = useLang()

  return (
    <section className='achievements d-flex justify-between align-start gap-x-4'>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
        className='title-wrapper'
      >
        <h1 className='achievements-title'>{t('achievements-title')}</h1>
        <p>{t('achievements-pretitle')}</p>
      </motion.div>
      <motion.div
        initial={{ y: '-100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
        className='box-wrapper'
      >
        <div className='box-item d-flex align-start gap-x-1 '>
          <img src='/assets/achievements/IconUsers.svg' alt='svg' />
          <div>
            <h1>1000,000+</h1>
            <p>{t('users')}</p>
          </div>
        </div>
        <div className='box-item d-flex align-start gap-x-1 '>
          <img src='/assets/achievements/IconUser2.svg' alt='svg' />
          <div>
            <h1>18 лет вместе</h1>
            <p>{t('users')}</p>
          </div>
        </div>
        <div className='box-item d-flex align-start gap-x-1 '>
          <img src='/assets/achievements/IconService.svg' alt='svg' />
          <div>
            <h1>15+</h1>
            <p>{t('users')}</p>
          </div>
        </div>
        <div className='box-item d-flex align-start gap-x-1 '>
          <img src='/assets/achievements/IconUser3.svg' alt='svg' />
          <div>
            <h1>1000,000+</h1>
            <p>{t('users')}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
