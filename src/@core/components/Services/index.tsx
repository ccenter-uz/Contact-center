'use client'
import { FC, useState } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Card, Col, Row } from 'antd'
import { Button } from '../reusables/Button'
import { motion } from 'framer-motion'
import { ModalService } from '../Comment/Modal'

const headerConfig = {
  background: '#193BDA',
  padding: ' 15px 20px',
  fontSize: '22px',
  color: '#fff'
}
export const Services: FC = () => {
  const { t } = useLang()
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  // openModal
  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <section id='services' className='services w-100'>
      <div className='services-title d-flex justify-center '>
        <h1>{t('services')}</h1>
      </div>
      <div className='service-content d-flex align-center justify-center  flex-wrap gap-y-4'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1 }}
          className='content-left d-flex justify-center'
        >
          <Card
            headStyle={headerConfig}
            title={
              <div className='card-title d-flex align-center justify-between'>
                <h1>{t('service-first-card-title')}</h1>
                <img src='/assets/service/Rocket.svg' alt='rocket' loading='lazy' placeholder='loading...' />
              </div>
            }
            cover={
              <img
                style={{ objectFit: 'cover' }}
                src={'/assets/service/mainCardImg.svg'}
                alt='card-img'
                loading='lazy'
              />
            }
            bodyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className='card-item-left'
          >
            <Button onclick={openModal}>{t('left-application')}</Button>
            <img
              loading='lazy'
              className='line-bottom'
              src='/assets/service/BottomLineMainCard.svg'
              alt='svg'
              placeholder='loading...'
            />
          </Card>
        </motion.div>
        <div className='content-right'>
          <div className='d-flex flex-wrap justify-center flex-column gap-y-4'>
            <div className='d-flex flex-wrap gap-4 justify-center'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 1 }}
              >
                <Card headStyle={headerConfig} title={t('service-other-card-title')} className='card-item'>
                  <Row justify={'space-between'} gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                      <p>{t('service-other-card-paragraph')}</p>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} push={3}>
                      <img src='/assets/service/Profile.svg' alt='logo' loading='lazy' placeholder='loading...' />
                    </Col>
                  </Row>
                  <div className='btn d-flex justify-center align-center '>
                    <Button onclick={openModal}>{t('left-application')}</Button>
                  </div>
                  <img
                    className='line-bottom'
                    src='/assets/service/BottomLineOtherCards.svg'
                    alt='svg'
                    loading='lazy'
                    placeholder='loading...'
                  />
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 1 }}
              >
                <Card headStyle={headerConfig} title={t('service-other-card-title-second')} className='card-item'>
                  <Row justify={'space-between'} gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                      <p>{t('service-other-card-paragraph-second')}</p>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} push={2}>
                      <img src='/assets/service/StepsChart.svg' alt='logo' loading='lazy' placeholder='loading...' />
                    </Col>
                  </Row>
                  <div className='btn d-flex justify-center align-center '>
                    <Button onclick={openModal}>{t('left-application')}</Button>
                  </div>
                  <img
                    className='line-bottom'
                    src='/assets/service/BottomLineOtherCards.svg'
                    alt='svg'
                    loading='lazy'
                    placeholder='loading...'
                  />
                </Card>
              </motion.div>
            </div>

            <div className='d-flex flex-wrap gap-4 justify-center'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 1 }}
              >
                <Card headStyle={headerConfig} title={t('service-other-card-title-third')} className='card-item'>
                  <Row justify={'space-between'} gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                      <p>{t('service-other-card-paragraph-third')}</p>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} push={3}>
                      <img src='/assets/service/Map.svg' alt='logo' loading='lazy' placeholder='loading...' />
                    </Col>
                  </Row>
                  <div className='btn d-flex justify-center align-center '>
                    <Button onclick={openModal}>{t('left-application')}</Button>
                  </div>
                  <img
                    className='line-bottom'
                    src='/assets/service/BottomLineOtherCards.svg'
                    alt='svg'
                    loading='lazy'
                    placeholder='loading...'
                  />
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 1 }}
              >
                <Card headStyle={headerConfig} title={t('service-other-card-title-four')} className='card-item'>
                  <Row justify={'space-between'} gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                      <p>{t('service-other-card-paragraph-four')}</p>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} push={2}>
                      <img src='/assets/service/Chat.svg' alt='logo' loading='lazy' placeholder='loading...' />
                    </Col>
                  </Row>
                  <div className='btn d-flex justify-center align-center '>
                    <Button onclick={openModal}>{t('left-application')}</Button>
                  </div>
                  <img
                    className='line-bottom'
                    src='/assets/service/BottomLineOtherCards.svg'
                    alt='svg'
                    loading='lazy'
                    placeholder='loading...'
                  />
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {modalOpen && <ModalService open={modalOpen} close={setModalOpen} />}
    </section>
  )
}
