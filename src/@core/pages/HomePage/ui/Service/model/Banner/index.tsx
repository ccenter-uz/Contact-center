import { DataType } from '../../ui/TabContent'
import './style.scss'
import { Button } from 'antd'
import DialogService from '../../ui/DialogService'
import { BASIC_LINK } from '@/@core/shared/type'
import { getLng } from '../../utils'
import { useLang } from '@/@core/apps/hooks/useLang'
import { useDisclosure } from '@/@core/apps/hooks/useDisclosure'

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
  const { t, locale } = useLang()
  const { isOpen, open, close } = useDisclosure()

  return (
    <section id='banner' style={styleBanner(BASIC_LINK + '' + data.background_image)} className='fade-in'>
      <div className='title-block'>
        <div className='title-upper-block d-flex flex-column gap-y-2'>
          <h1>{getLng(locale, data, 'title')}</h1>
          <p>{getLng(locale, data, 'paragraph')}</p>
        </div>
        <div className='phone-block d-flex align-center gap-x-1'>
          <img src={'/phone.svg'} alt='icon' />
          <h2>{data.phone}</h2>
        </div>
      </div>
      <div className='button-group d-flex align-center justify-between m-t-1'>
        <Button style={{ width: 'fit-content', height: '45px', background: 'var(--button-bg-color)' }} type='primary'>
          <a href='tel:+998712008080'>{t('callback')}</a>
        </Button>
        <Button style={{ width: 'fit-content', height: '45px', color: 'var(--btnColor)' }} onClick={open}>
          {t('send-request')}
        </Button>
      </div>
      {/* ModalService */}
      <DialogService open={isOpen} close={close} services={data.services} />
    </section>
  )
}
