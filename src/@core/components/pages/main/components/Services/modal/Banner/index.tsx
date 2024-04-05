import { useLang } from '@/@core/service/hooks/useLang'
import { DataType } from '../../ui/TabContent'
import './style.scss'
import { Button } from 'antd'
import { useState } from 'react'
import DialogService from '../../ui/DialogService'
import { BASIC_LINK } from '@/@core/utils/type'

const styleBanner = (url: string) => ({
  backgroundImage: `url(${url})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '578px',
  width: '100%',
  borderRadius: '8px'
})

type Props = {
  data: DataType
}

export default function Banner({ data }: Props) {
  const { locale } = useLang()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // OPEN
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <section id='banner' style={styleBanner(BASIC_LINK + '' + data.background_image)}>
      <div className='title-block'>
        <div className='title-upper-block d-flex flex-column gap-y-2'>
          <h1>
            {(locale === 'ru' && data.title_ru) ||
              (locale === 'uz' && data.title) ||
              (locale === 'en' && data.title_en)}
          </h1>
          <p>
            {(locale === 'ru' && data.paragraph_ru) ||
              (locale === 'uz' && data.paragraph_uz) ||
              (locale === 'en' && data.paragraph_en)}
          </p>
        </div>
        <div className='phone-block d-flex align-center gap-x-1'>
          <img src={'/phone.svg'} alt='icon' />
          <h2>{data.phone}</h2>
        </div>
      </div>
      <div className='button-group d-flex align-center justify-between m-t-1'>
        <Button style={{ width: 'fit-content', height: '45px', background: 'var(--button-bg-color)' }} type='primary'>
          Связаться
        </Button>
        <Button style={{ width: 'fit-content', height: '45px', color: 'var(--btnColor)' }} onClick={handleOpenModal}>
          Отправить запрос
        </Button>
      </div>
      {/* ModalService */}
      <DialogService open={isOpen} close={setIsOpen} services={data.services} />
    </section>
  )
}
