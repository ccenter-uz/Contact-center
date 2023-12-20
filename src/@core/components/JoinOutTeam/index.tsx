import { FC } from 'react'
import './style.scss'
import { Card } from 'antd'
import { useLang } from '@/@core/service/hooks/useLang'
import { ArrowRight } from 'react-feather'

type IHeaderConfig = {
  height: '95px'
  background: '#193BDA'
  padding: ' 15px 20px'
  fontSize: '36px'
  color: '#fff'
  textAlign: 'center'
}

const headerConfig: IHeaderConfig = {
  height: '95px',
  background: '#193BDA',
  padding: ' 15px 20px',
  fontSize: '36px',
  color: '#fff',
  textAlign: 'center'
}

export const JoinOurTeam: FC = () => {
  const { t } = useLang()

  return (
    <section className='join d-flex align-center justify-between gap-3 flex-wrap'>
      <div className='join-image'>
        <img src='/assets/mainPic.svg' alt='join' />
      </div>
      <div className='join-card'>
        <Card headStyle={headerConfig} title={<h1>{t('out-team-join')}</h1>} className='card-item'>
          <p>
            Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
            itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
            barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
            longer admire do barton vanity itself do in it.
          </p>
          <div key='links' className='card-link '>
            <h3 className='d-flex align-center gap-x-1'>
              Оставь Заявку О себе здесь <ArrowRight className='arrow-icon' />
            </h3>
          </div>
        </Card>
      </div>
    </section>
  )
}
