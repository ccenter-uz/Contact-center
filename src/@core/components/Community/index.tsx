import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'

export const Community: FC = () => {
  const { t } = useLang()

  return (
    <section id='community' className='community d-flex flex-column align-center justify-around'>
      <div className='community-title d-flex justify-center m-b-4'>
        <h1>{t('collective')}</h1>
      </div>
      <div className='community-content d-flex align-start gap-3 '>
        <div className='content-text'>
          <p>Built Wicket longer admire</p>
          <br />
          <span>
            Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
            itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
            barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
            longer admire do barton vanity itself do in it.
          </span>
        </div>
        <div className='content-images d-flex align-center justify-center gap-3 flex-wrap'>
          <img src='/assets/collective/community.svg' alt='img' />
          <img src='/assets/collective/community.svg' alt='img' />
          <img src='/assets/collective/community.svg' alt='img' />
        </div>
      </div>
    </section>
  )
}
