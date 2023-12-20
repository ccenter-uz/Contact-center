import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'

export const Partners: FC = () => {
  const { t } = useLang()

  return (
    <section id='partners' className='partners d-flex flex-column justify-around gap-3'>
      <div className='partners-title d-flex justify-center'>
        <h1>{t('partners')}</h1>
      </div>
      <div className='partners-images m-b-3 d-flex align-center justify-between flex-wrap gap-3'>
        <img src='/assets/partners/clickup.svg' alt='click' />
        <img src='/assets/partners/dropbox_blue.svg' alt='dropbox' />
        <img src='/assets/partners/elastic.svg' alt='elastic' />
        <img src='/assets/partners/google.svg' alt='google' />
        <img src='/assets/partners/freshbooks.svg' alt='freshbooks' />
      </div>
    </section>
  )
}
