'use client'
import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { IGlobalDataType, IStatistic } from '@/@core/utils/type'

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false
})

export const Achievements: FC<IGlobalDataType> = ({ data }) => {
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
          {data.statistic.map((state: IStatistic, index: number) => {
            return (
              <div key={index}>
                <h1 className='d-flex align-center '>
                  <AnimatedNumbers
                    includeComma
                    transitions={index => ({
                      type: 'tween',
                      duration: index + 0.3
                    })}
                    animateToNumber={+state.statistic || 100000}
                  />
                  +
                </h1>
                <p>{state.title}</p>
              </div>
            )
          })}
        </div>
        <div className='box-item d-flex align-start gap-x-1 '>
          <img src='/assets/achievements/IconUser2.svg' alt='svg' />
          <div>
            <h1 className='d-flex align-center gap-x-1'>
              <AnimatedNumbers
                includeComma
                transitions={index => ({
                  type: 'tween',
                  duration: index + 0.3
                })}
                animateToNumber={18}
              />
              лет вместе
            </h1>
            <p>{t('users')}</p>
          </div>
        </div>
        <div className='box-item d-flex align-start gap-x-1 '>
          <img src='/assets/achievements/IconService.svg' alt='svg' />
          <div>
            <h1 className='d-flex align-center gap-x-1'>
              <AnimatedNumbers
                includeComma
                transitions={index => ({
                  type: 'tween',
                  duration: index + 0.3
                })}
                animateToNumber={15}
              />
              +
            </h1>
            <p>{t('users')}</p>
          </div>
        </div>
        <div className='box-item d-flex align-start gap-x-1 '>
          <img src='/assets/achievements/IconUser3.svg' alt='svg' />
          <div>
            <h1 className='d-flex align-center '>
              <AnimatedNumbers
                includeComma
                transitions={index => ({
                  type: 'tween',
                  duration: index + 0.3
                })}
                animateToNumber={1000000}
              />
              +
            </h1>
            <p>{t('users')}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
