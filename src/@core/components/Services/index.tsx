import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Card, Col, Row } from 'antd'
import { Button } from '../reusables/Button'

const headerConfig = {
  background: '#193BDA',
  padding: ' 15px 20px',
  fontSize: '22px',
  color: '#fff'
}
export const Services: FC = () => {
  const { t } = useLang()

  return (
    <section id='services' className='services w-100'>
      <div className='services-title d-flex justify-center '>
        <h1>{t('services')}</h1>
      </div>
      <div className='service-content d-flex align-center justify-center  flex-wrap gap-y-4'>
        <div className='content-left d-flex justify-center'>
          <Card
            headStyle={headerConfig}
            title={
              <div className='card-title d-flex align-center justify-between'>
                <h1>Autsorsing xizmati</h1>
                <img src='/assets/service/Rocket.svg' alt='rocket' />
              </div>
            }
            cover={<img src={'/assets/service/mainCardImg.svg'} alt='card-img' />}
            bodyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className='card-item-left'
          >
            <Button>{t('left-application')}</Button>
            <img className='line-bottom' src='/assets/service/BottomLineMainCard.svg' alt='svg' />
          </Card>
        </div>
        <div className='content-right'>
          <div className='d-flex flex-wrap justify-center flex-column gap-y-4'>
            <div className='d-flex flex-wrap gap-4 justify-center'>
              <Card headStyle={headerConfig} title='Aloqa Operator' className='card-item'>
                <Row justify={'space-between'}>
                  <Col xs={10} sm={10} md={10} lg={7} xl={7}>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                  </Col>
                  <Col xs={10} sm={10} md={10} lg={7} xl={7} push={3}>
                    <img src='/assets/service/Profile.svg' alt='logo' />
                  </Col>
                </Row>
                <div className='btn d-flex justify-center align-center '>
                  <Button>{t('left-application')}</Button>
                </div>
                <img className='line-bottom' src='/assets/service/BottomLineMainCard.svg' alt='svg' />
              </Card>
              <Card headStyle={headerConfig} title='Aloqa Operator' className='card-item'>
                <Row justify={'space-between'}>
                  <Col xs={10} sm={10} md={10} lg={7} xl={7}>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                  </Col>
                  <Col xs={10} sm={10} md={10} lg={7} xl={7} push={2}>
                    <img src='/assets/service/StepsChart.svg' alt='logo' />
                  </Col>
                </Row>
                <div className='btn d-flex justify-center align-center '>
                  <Button>{t('left-application')}</Button>
                </div>
                <img className='line-bottom' src='/assets/service/BottomLineMainCard.svg' alt='svg' />
              </Card>
            </div>

            <div className='d-flex flex-wrap gap-4 justify-center'>
              <Card headStyle={headerConfig} title='Aloqa Operator' className='card-item'>
                <Row justify={'space-between'}>
                  <Col xs={10} sm={10} md={10} lg={7} xl={7}>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                  </Col>
                  <Col xs={10} sm={10} md={10} lg={7} xl={7} push={3}>
                    <img src='/assets/service/Map.svg' alt='logo' />
                  </Col>
                </Row>
                <div className='btn d-flex justify-center align-center '>
                  <Button>{t('left-application')}</Button>
                </div>
                <img className='line-bottom' src='/assets/service/BottomLineMainCard.svg' alt='svg' />
              </Card>
              <Card headStyle={headerConfig} title='Aloqa Operator' className='card-item'>
                <Row justify={'space-between'}>
                  <Col xs={10} sm={10} md={10} lg={7} xl={7}>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                  </Col>
                  <Col xs={10} sm={10} md={10} lg={7} xl={7} push={2}>
                    <img src='/assets/service/Chat.svg' alt='logo' />
                  </Col>
                </Row>
                <div className='btn d-flex justify-center align-center '>
                  <Button>{t('left-application')}</Button>
                </div>
                <img className='line-bottom' src='/assets/service/BottomLineMainCard.svg' alt='svg' />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
