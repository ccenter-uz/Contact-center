import { Button, Card, Divider } from 'antd'
import { FC } from 'react'
import { DataType } from '../../ui/TabContent'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'react-feather'
import AliceCarousel from 'react-alice-carousel'
import { useLang } from '@/@core/service/hooks/useLang'
import { BASIC_LINK } from '@/@core/utils/type'
import './style.scss'
import DialogSendData from '../../ui/DialogSendData'
import { Link } from '@/navigation'
import { getLng } from '../../utils'
import { useDisclosure } from '@/@core/service/hooks/useDisclosure'

type Props = {
  data: DataType[]
}

const responsive = {
  0: { items: 1 },
  545: { items: 2 },
  768: { items: 2 },
  1154: { items: 3 },
  1500: { items: 3 }
}

const Cards: FC<Props> = props => {
  const { data } = props
  const { locale, t } = useLang()
  const { open, isOpen, close } = useDisclosure()
  const searchParams = useSearchParams()

  return (
    <>
      <AliceCarousel
        autoHeight
        disableDotsControls
        responsive={responsive}
        mouseTracking={false}
        animationEasingFunction='linear'
        renderPrevButton={({ isDisabled }) => {
          return (
            <Button
              type='primary'
              disabled={isDisabled}
              style={{
                background: !isDisabled ? 'rgba(255, 95, 47, 1)' : 'white',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                padding: '5px'
              }}
            >
              <ArrowLeft width={'18px'} />
            </Button>
          )
        }}
        renderNextButton={({ isDisabled }) => {
          return (
            <Button
              type='primary'
              disabled={isDisabled}
              style={{
                background: !isDisabled ? 'rgba(255, 95, 47, 1)' : 'white',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                padding: '5px'
              }}
            >
              <ArrowRight width={'18px'} />
            </Button>
          )
        }}
      >
        {data?.map(item => (
          <Card
            className={item.background_image ? 'cards-card-img-exists' : 'cards-card-img-notExists'}
            headStyle={{ borderBottom: 'none', color: 'white' }}
            key={item.id}
            bodyStyle={{
              display: 'flex',
              flexDirection: 'column',
              height: '88%'
            }}
            style={{
              backgroundImage: item.background_image
                ? `url(${BASIC_LINK + '' + item.background_image})`
                : "url('/Ellipse.png')",
              color: item.background_image ? '#fff' : '#252525'
            }}
            title={<p className='card-title'>{getLng(locale, item, 'title')}</p>}
          >
            <div className='card-header d-flex align-center  gap-2'>
              <img src={BASIC_LINK + '' + item.icon} alt='icon' width={'22px'} height={'22px'} />
              <div className='card-header-title'>
                <p>{getLng(locale, item, 'paragraph')}</p>
                <span>{getLng(locale, item, 'span')}</span>
              </div>
            </div>
            <Divider style={{ background: item.background_image ? 'rgb(255, 255, 255,40%)' : 'rgb(0, 0, 0,10%)' }} />
            <div className='content-block'>
              <p>{getLng(locale, item, 'content_text')}</p>
            </div>
            <div className='card-footer'>
              <Link
                href={`?service=${searchParams.get('service')}&tarif=${item.id}`}
                scroll={false}
                onClick={() => sessionStorage.setItem('selectedTarif', JSON.stringify(item))}
              >
                <button onClick={open} className={item.background_image ? 'img-exists-btn' : 'img-not-exists-btn'}>
                  {t('choose-btn')}
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </AliceCarousel>
      <DialogSendData open={isOpen} close={close} />
    </>
  )
}

export default Cards
