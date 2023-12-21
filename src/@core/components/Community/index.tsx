import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import ImageSwiper from '../reusables/Slider'

export const Community: FC = () => {
  const { t } = useLang()

  return (
    <section id='community' className='community d-flex flex-column align-center '>
      <div className='community-title d-flex justify-center m-b-4'>
        <h1>{t('collective')}</h1>
      </div>
      <div className='community-content d-flex align-start gap-3 m-t-4'>
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
        <div className='content-images d-flex align-center justify-center flex-wrap'>
          <ImageSwiper
            images={[
              '/assets/collective/community.svg',
              '/assets/collective/community.svg',
              '/assets/collective/community.svg',
              '/assets/collective/community.svg',
              '/assets/collective/community.svg',
              '/assets/collective/community.svg'
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Community
