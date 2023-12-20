import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Card, Col, Row } from 'antd'

export const OtherService: FC = () => {
  const { t } = useLang()

  return (
    <section className='other-section d-flex flex-column justify-around gap-y-4'>
      <div className='other-title d-flex justify-center '>
        <h1>{t('other-service')}</h1>
      </div>
      <div className='d-flex align-center justify-center gap-5 flex-wrap'>
        <Card hoverable className='other-card'>
          <h1>
            Axborot va ma’lumot <br /> xizmati
          </h1>
          <div className='other-img d-flex align-end justify-end'>
            <img src='/assets/otherService/chip.svg' alt='chip' />
          </div>
        </Card>
        <Card hoverable className='other-card'>
          <h1>
            Tabriklash <br /> xizmati
          </h1>
          <div id='present' className='other-img d-flex align-end justify-end'>
            <img src='/assets/otherService/present.svg' alt='present' />
          </div>
        </Card>
        <Card hoverable className='other-card'>
          <h1>
            1064 <br /> xizmati
          </h1>
          <div className='other-img d-flex align-end justify-end'>
            <img src='/assets/otherService/earphones.svg' alt='earphones' />
          </div>
        </Card>
        <Card hoverable className='other-card'>
          <h1>
            1086 <br /> xizmati
          </h1>
          <div className='other-img d-flex align-end justify-end'>
            <img src='/assets/otherService/earphones.svg' alt='earphones' />
          </div>
        </Card>
      </div>
    </section>
  )
}
