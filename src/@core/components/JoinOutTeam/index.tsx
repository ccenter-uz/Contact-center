'use client'
import { FC } from 'react'
import './style.scss'
import { Card, Col, Row } from 'antd'
import { useLang } from '@/@core/service/hooks/useLang'
import { ArrowRight } from 'react-feather'
import { motion } from 'framer-motion'

type IHeaderConfig = {
  height: '95px'
  background: '#193BDA'
  padding: ' 15px 20px'
  fontSize: '36px'
  color: '#fff'
  textAlign: 'center'
}

const headerConfig: IHeaderConfig = {
  height: '95px',
  background: '#193BDA',
  padding: ' 15px 20px',
  fontSize: '36px',
  color: '#fff',
  textAlign: 'center'
}

export const JoinOurTeam: FC = () => {
  const { t } = useLang()

  return (
    <section className='join d-flex align-center justify-between gap-3 flex-wrap'>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 1 }}
        viewport={{ once: true }}
        className='join-image'
      >
        <img src='/assets/mainPic.svg' alt='join' loading='lazy' placeholder='loading...' />
        <div className='count-users'>1{t('join-users')}</div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1 }}
        viewport={{ once: true }}
        className='join-card'
      >
        <Card headStyle={headerConfig} title={<h1>{t('out-team-join')}</h1>} className='card-item'>
          <Row justify={'space-between'}>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
              <p>{t('join-paragraph')}</p>
            </Col>
            <Col className='d-flex flex-column align-center' xs={24} sm={24} md={5} lg={4} xl={4} xxl={4}>
              <img src='/assets/QRcode.svg' alt='qrcode' width={120} loading='lazy' placeholder='loading...' />
              <p>SCAN ME</p>
            </Col>
          </Row>
          <div key='links' className='card-link '>
            <a href='https://t.me/ucc_hr_bot' target='_blank'>
              <h3 className='d-flex align-center gap-x-1'>
                {t('join-btn')} <ArrowRight className='arrow-icon' />
              </h3>
            </a>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
