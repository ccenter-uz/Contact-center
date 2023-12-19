import { useLang } from '@/@core/service/hooks/useLang'
import { FC } from 'react'
import './style.scss'

export const Stories: FC = () => {
  const { t } = useLang()

  // mock-data
  const data = [
    {
      id: 1,
      title: 'Nimadur'
    },
    {
      id: 2,
      title: 'Nimadur'
    },
    {
      id: 3,
      title: 'Nimadur'
    },
    {
      id: 4,
      title: 'Nimadur'
    },
    {
      id: 5,
      title: 'Nimadur'
    },
    {
      id: 6,
      title: 'Nimadur'
    },
    {
      id: 7,
      title: 'Nimadur'
    },
    {
      id: 8,
      title: 'Nimadur'
    }
  ]

  return (
    <section id='stories'>
      <p style={{ fontSize: '12px' }}>{t('follow-last-news')}</p>
      <div className='circles-wrapper d-flex align-center justify-between m-t-2 gap-x-3 p-x-4'>
        {data?.map(item => {
          return (
            <div key={item.id} className='d-flex flex-column justify-center align-center'>
              <div className='circle-item d-flex align-center justify-center m-b-2'></div>
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
