import { CSSProperties, FC } from 'react'
import './style.scss'
import { Card, Col, Row } from 'antd'
import { ArrowRight } from 'react-feather'
import { motion } from 'framer-motion'
import { Link } from '@/navigation'
import { useLang } from '@/@core/apps/hooks/useLang'

const headerConfig: CSSProperties = {
  height: '95px',
  background: 'rgba(21, 110, 211, 1)',
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
      >
        <img
          fetchPriority='low'
          loading='lazy'
          sizes='(max-width:400px) 400px,(max-width:768px) 768px,(max-width:1024px) 1024px,100vw'
          src='/assets/mainPic.png'
          alt='join'
          className='join-image'
        />
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
              <img
                fetchPriority='low'
                loading='lazy'
                sizes='(max-width:400px) 400px,(max-width:768px) 768px,(max-width:1024px) 1024px,100vw'
                src='/assets/QRcode.svg'
                alt='qrcode'
                width={100}
                height={100}
              />
              <p>SCAN ME</p>
            </Col>
          </Row>
          <div key='links' className='card-link '>
            <Link href='https://t.me/ucc_hr_bot' target='_blank' aria-current='location' aria-label='link-telegram'>
              <h3 className='d-flex align-center gap-x-1'>
                {t('join-btn')} <ArrowRight className='arrow-icon' />
              </h3>
            </Link>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
